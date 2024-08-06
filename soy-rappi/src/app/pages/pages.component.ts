import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Footer } from '../utils/strapi/footer/models/footer.interface';
import { FooterService } from '../utils/strapi/footer/services/footer.service';
import { LoadContentService } from '../utils/load-content/load-content.service';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.scss'],
})
export class PagesComponent implements OnInit, OnDestroy {

  footerData: Footer | undefined;

  showFooter: boolean = false;

  private _subscription: Subscription = new Subscription();

  constructor(
    private _footerService: FooterService,
    public _loadContentService: LoadContentService,
  ) { 
    this._loadContentService.showContent = false;
  }

  ngOnInit(): void {
    this._subscription.add(
      this._footerService.getFooterData().subscribe((res) => {
        this.footerData = (res.data) ? res.data : undefined;
        this._loadContentService.footerReady();
           
      }),
    );
  }

  ngOnDestroy(): void {
    this._subscription.unsubscribe();
  }
}
