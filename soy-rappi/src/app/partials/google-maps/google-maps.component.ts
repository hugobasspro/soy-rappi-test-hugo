import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-google-maps',
  templateUrl: './google-maps.component.html',
  styleUrls: ['./google-maps.component.scss'],
})
export class GoogleMapsComponent implements OnChanges {

  @Input() mapsUrl: string = '';

  url: SafeResourceUrl;

  constructor(private sanitizer: DomSanitizer) {
    if (this.mapsUrl) {
      this.url = this.sanitizer.bypassSecurityTrustResourceUrl(this.mapsUrl);
    } else {
      this.url = this.sanitizer.bypassSecurityTrustResourceUrl(
        'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d9818.715200445033!2d-70.62808866658793!3d-33.'
        + '57253260605193!3m2!1i1024!2i768!4f13.1-33.57253260605193!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9662da0290'
        + '4bb8c9%3A0x4ae22d0ff0f0e27b!2sVivero%20Antumapu!5e0!3m2!1ses!2sco!4v1641782513903!5m2!1ses!2sco');
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.mapsUrl && changes.mapsUrl.currentValue) {
      this.url = this.sanitizer.bypassSecurityTrustResourceUrl(changes.mapsUrl.currentValue);
    }
  }
}
