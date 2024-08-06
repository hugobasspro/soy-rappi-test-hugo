import { Component, OnInit, ElementRef } from '@angular/core';
import { TagManagerService } from './utils/tag-manager/services/tag-manager.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(
    private elementRef: ElementRef,
    private tagManager: TagManagerService,
  ) { }

  ngOnInit(): void {
    this.elementRef.nativeElement.removeAttribute('ng-version');
    this.tagManager.addGtmToDom();
  }

}
