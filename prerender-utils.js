'use strict';

const axios = require('axios');
const qs = require('qs');
const { Readable, Transform, pipeline } = require('stream');
const fs = require('fs');
const path = require('path');

const environments = {
  production: 'https://services.rappi.com/api/soy-rappi-api/',
  stage: 'https://blograppitenderos-stage.destiny.systems/api/',
  dev: 'http://localhost:1337',
};

async function* getLinksData(baseURL, lang) {
  const httpClient = axios.create({
    baseURL,
    timeout: 5000,
  });

  const query = {
    _locale: lang,
    _start: 0,
  };

  const totalEntriesRet = await httpClient.get(`/links/count?${qs.stringify(query)}`);
  const totalEntries = totalEntriesRet.data;
  if (totalEntries === 0) {
    console.error(`There is no entries available`);
  }

  let _start = 0;
  do {
    const q = qs.stringify(Object.assign(query, {_start}));
    _start += 100;
    const ret = await httpClient.get(`/links?${q}`);
    yield* ret.data;
  } while (_start < totalEntries);

}

async function getTagManagerId(baseURL, lang) {


  const httpClient = axios.create({
    baseURL,
    timeout: 5000,
  });

  const query = {
    _locale: lang,
  };

  let res;

  try {
    res = await httpClient.get(`/tag-manager?${qs.stringify(query)}`);
  } catch {
    console.error('There is no tag manager id')
  }


  return (res && res.data && res.data.idContainer) ? res.data.idContainer.trim() : 'GTM-XXXXXX';
}

function createTagManagerJSON(id) {
  const json = {
    "id": id
  };
  const jsonString = JSON.stringify(json);
  fs.writeFile("soy-rappi/src/environments/tag-manager/tag-manager-data.json", jsonString, function(err, result) {
    if (err) {
      console.log('error saving the tag manager data', err)
    } else {
      console.log('Set Tag Manager data successfully')
    }
});
}

function transformStream() {
  return new Transform({
    writableObjectMode: true,
    readableObjectMode: false,
    highWaterMark: 50,
    transform: (data, _, done) => {
      done(null, `/${data.slug}\n`);
    }
  });
}

// Why don't just iterate and write everything?
// There may be thousands of records that would exhaust CI Server resources
async function main() {
  if (process.argv.length < 4) {
    console.error('Use the command with node generate-routes.js <env> <lang>');
    console.error('e.x. node generate-routes.js stage es-co');
    process.exit(1);
  }
  const env = process.argv[2];
  const lang = process.argv[3];

  //read data from API and write the routes on .txt file
  const readable = Readable.from(getLinksData(environments[env], lang));
  const routesFileStream = fs.createWriteStream(path.join(__dirname, 'routes.txt'));

  await new Promise((resolve, reject) => {
    pipeline(
      readable,
      transformStream(),
      routesFileStream,
      (err) => {
        if (err) {
          reject();
        } else {
          console.log(`Routes files generated successfully`);
          resolve();
        }
      }
    );
  });

  // Choose country robot content
  const __dirname_src = path.join(__dirname, `soy-rappi/src`);
  await fs.readFile(path.join(__dirname_src, `/robots/${lang.slice(-2).toLowerCase()}.txt`), 'utf8', async (err, data) => {
    if (err) return console.log(err);

    await fs.writeFile(path.join(__dirname_src, 'robots.txt'), data, 'utf8', err => {
      if (err) console.log(err);
    })
  });

  const idContainer = await getTagManagerId(environments[env], lang);

  createTagManagerJSON(idContainer);

}

main();


