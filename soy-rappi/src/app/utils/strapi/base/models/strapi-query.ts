export interface StrapiQuery {
  /* eslint-disable-next-line @typescript-eslint/no-explicit-any */
  where?: { [key: string]: any };
  sort?: string;
  limit?: number;
  start?: number;
  locale?: string;
  q?: string;
  populate?: boolean;
}
