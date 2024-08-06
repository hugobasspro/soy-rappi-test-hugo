import { Component, Input, OnInit } from '@angular/core';
import { FormControl, Validators, FormBuilder } from '@angular/forms';
import { Observable, Subscription } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { ResponsiveService } from 'src/app/utils/services/responsive/responsive.service';
import { StrapiQuery } from 'src/app/utils/strapi/base/models/strapi-query';
import { CategoriesFilters } from 'src/app/utils/strapi/blog/models/categories-filters';
import { BlogCategoriesService } from 'src/app/utils/strapi/blog/services/blog-categories/blog-categories.service';
import { FaqsBlock } from 'src/app/utils/strapi/models/blocks/faqs-block.interface';
import { Question } from 'src/app/utils/strapi/models/blocks/question.interface';
import { QuestionService } from 'src/app/utils/strapi/question/services/question.service';


@Component({
  selector: 'app-faqs-block',
  templateUrl: './faqs-block.component.html',
  styleUrls: ['./faqs-block.component.scss']
})
export class FaqsBlockComponent implements OnInit {

  @Input() public display!: string[];

  @Input() data!: FaqsBlock;

  search: Question[] = [];

  categories: CategoriesFilters[] = [];

  formData = this.fb.group({
    question: ['', Validators.required],
  });

  isActive: number = 0;

  questions: Question[] = [];

  private screenSubscription: Subscription | undefined;

  constructor(
    public responsiveService: ResponsiveService,
    private blogCategoriesService: BlogCategoriesService,
    private questionService: QuestionService,
    private fb: FormBuilder,
  ) { 
  }

  ngOnInit(): void {
    this.screenSubscription = this.responsiveService.mediaBreakpoint$.subscribe(
      (screen) => (this.display = screen)
    );

    this.blogCategoriesService.getCategories().subscribe((res) => {
      this.categories = res.data ? res.data : [];
      const category  = this.categories[0];
      this.questions = category.questions.length > 0 ? category.questions : [];
    });

    this.getQuestions();
  }

  valuechange(searchValue: string) {
    if (searchValue === '') {
      this.search = [];
      this.getQuestions();
      return;
    }
    if (searchValue.length < 3) {
      return;
    }
    const query = {
      q: searchValue,
    }
    this.getQuestions(query);
  }

  getOption(value: string, categroyId: string | number, id: number | string | undefined) {
    const category = this.categories.find(c => c.id === categroyId);
    this.questions = category ? category.questions : [];
    const index  = this.categories.findIndex((c) => {
      return c.id == category?.id;
    });
    this.isActive = index;
    this.questions.map((q) => {
      if (q.id === id) {
        q.active = true;
      } else {
        q.active = false;
      }
    })
  }

  selectCategory(n: number, categroyId: number | string) {
    this.isActive = n;
    const category = this.categories.find(c => c.id === categroyId);
    this.questions = category ? category.questions : [];
  }

  getQuestions(query?: StrapiQuery) {
    this.questionService.getCategories(query).subscribe((res) => {
      this.search = res.data ? res.data : [];
    });
  }

  toggle(item: Question) {
    this.questions.map((q) => {
      if (q.id === item.id) {
        q.active = false;
      }
    });
  }
}
