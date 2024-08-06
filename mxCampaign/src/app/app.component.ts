import {Component, ElementRef, OnInit} from '@angular/core';
import {TagManagerService} from "./services/tag-manager/services/tag-manager.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
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
