import { Component, EventEmitter, Input, Output } from '@angular/core';
@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.scss'],
})
export class PaginatorComponent {

  @Input() numberOfPages: number = 0;

  @Input() currentPage: number = 0;

  @Input() countPage: number = 0;

  @Output() page: EventEmitter<number> = new EventEmitter();

  count: number = 0;

  constructor() { }

  counter(i: number) {
    return new Array(i);
  }

  newPage(i: number) {
    this.page.emit(i);
  }

  leftPage() {
    if (this.currentPage != 1) {
      this.page.emit(this.currentPage - 1);
    }
  }

  rightPage() {
    if (this.numberOfPages != this.currentPage) {
      this.page.emit(this.currentPage + 1);
    }
  }
}
