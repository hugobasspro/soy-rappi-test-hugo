import {
  ChangeDetectorRef,
  Component,
  ElementRef,
  Input,
  OnInit,
  ViewChild,
  ViewEncapsulation,
} from '@angular/core';
import { FormControl, Validators, FormBuilder } from '@angular/forms';
import { MatAutocompleteTrigger } from '@angular/material/autocomplete';
import { Observable, Subscription } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { ResponsiveService } from 'src/app/utils/services/responsive/responsive.service';
import { StrapiHttpResponse } from 'src/app/utils/strapi/base/models/strapi-http-response';
import { StrapiQuery } from 'src/app/utils/strapi/base/models/strapi-query';
import {
  Answer,
  CategoriesFaqs,
  CategoriesFilters,
} from 'src/app/utils/strapi/blog/models/categories-filters';
import { CategoryFaqsService } from 'src/app/utils/strapi/blog/services/categoryFaqs/category-faqs-service';
import {
  FaqsBlock,
  FaqsNewBlock,
} from 'src/app/utils/strapi/models/blocks/faqs-block.interface';
import { QuestionsFaqs } from 'src/app/utils/strapi/models/blocks/question.interface';
import { QuestionFaqsService } from 'src/app/utils/strapi/question/services/question-faqs.service';

@Component({
  selector: 'app-faqs-block-new',
  templateUrl: './faqs-block-new.component.html',
  styleUrls: ['./faqs-block-new.component.scss'],
})
export class FaqsBlockNew implements OnInit {
  @ViewChild('searchInput', { read: ElementRef })
  searchInput!: ElementRef;
  @ViewChild(MatAutocompleteTrigger)
  autocomplete!: MatAutocompleteTrigger;

  @Input() public display!: string[];

  @Input() data!: FaqsNewBlock;

  search: QuestionsFaqs[] = [];

  categories: CategoriesFaqs[] = [];

  formData = this.fb.group({
    question: ['', Validators.required],
  });

  isActive: number = 0;

  questions: QuestionsFaqs[] = [];

  answersFaqs: Answer[] = [];

  categoryFaqs: CategoriesFaqs[] = [];

  questionsFaqs: any[] = [];

  allQuestionsFaqs: any[] = [];

  selectedQuestion: any = null;

  activeCategory: any;

  searchNotFound = false;

  start: number = 0;

  limit: number = 50;

  private screenSubscription: Subscription | undefined;

  constructor(
    private cdr: ChangeDetectorRef,
    public responsiveService: ResponsiveService,
    private blogCategoriesService: CategoryFaqsService,
    private questionService: QuestionFaqsService,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.screenSubscription = this.responsiveService.mediaBreakpoint$.subscribe(
      (screen) => (this.display = screen)
    );

    this.blogCategoriesService.getCategories().subscribe((res) => {
      this.categories = res.data ? res.data : [];
      const category = this.categories[0];
      this.questions =
        category.questionsfaqs.length > 0 ? category.questionsfaqs : [];

      this.categories.map((category) => {
        this.data.category_faqs.map((c: CategoriesFaqs) => {
          if (category.id === c.id) {
            this.categoryFaqs = this.data.category_faqs;
          }
        });
      });

      this.getQuestionsRecursively();
    });
  }

  getQuestionsRecursively(): void {
    this.questionService
      .getQuestions(this.start, this.limit)
      .subscribe((res) => {
        if (res.data) {
          this.processQuestions(res.data);
          if (res.data.length === this.limit) {
            this.start += this.limit;
            this.getQuestionsRecursively();
          }
        }
      });
  }

  private processQuestions(questions: any): void {
    questions.forEach((question: QuestionsFaqs) => {
      if (question.categories.length > 0) {
        question.categories.forEach((category: CategoriesFaqs) => {
          this.data.questions_faqs.map((q: any) => {
            if (question.id === q.id) {
              const foundCategory = this.categoryFaqs.find(
                (cat) => cat.id === category.id
              );
              if (foundCategory) {
                const questionsWithIdCat = {
                  ...q,
                  categoryId: category.id,
                };
                this.questionsFaqs.push(questionsWithIdCat);
                this.allQuestionsFaqs.push(questionsWithIdCat);
                this.search = this.data.questions_faqs;
                this.data.answers.map((a: QuestionsFaqs) => {
                  if (q.answer === a.id) {
                    this.answersFaqs = this.data.answers;
                  }
                });

                if (this.categoryFaqs.length > 0) {
                  const defaultCategoryIndex = 0;
                  this.selectCategory(
                    defaultCategoryIndex,
                    this.categoryFaqs[defaultCategoryIndex].id
                  );
                }
              }
            }
          });
        });
      }
    });
  }

  normalizeText(text: string): string {
    return text
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .toLowerCase();
  }

  valuechange(searchValue: string) {
    if (searchValue === '') {
      this.search = this.data.questions_faqs;
      return;
    }
    if (searchValue.length < 1) {
      return;
    }
    const normalizedSearchValue = this.normalizeText(searchValue);
    this.search = this.data.questions_faqs.filter((question: any) =>
      this.normalizeText(question.text).includes(normalizedSearchValue)
    );
    this.searchQuestion();
  }

  getOption(value: string, idIndex: number, id: number) {
    this.search.map((q) => {
      if (q.id === id) {
        this.allQuestionsFaqs.map((q) => {
          if (q.id === id) {
            this.categoryFaqs.map((c: any) => {
              if (c.id === q.categoryId) {
                const selectedCategoryIndex = this.categoryFaqs.findIndex(
                  (c) => c.id === q.categoryId
                );
                if (selectedCategoryIndex !== -1) {
                  this.selectCategory(
                    selectedCategoryIndex,
                    this.categoryFaqs[selectedCategoryIndex].id
                  );
                  this.selectedQuestion = q;
                }
              }
            });
          }
        });
      }
    });
    this.cdr.detectChanges();
  }

  selectCategory(index: number, categoryId: number): void {
    this.isActive = index;
    this.activeCategory = this.categoryFaqs.find(
      (category) => category.id === categoryId
    );

    this.filterQuestionsForActiveCategory();
  }

  filterQuestionsForActiveCategory(): void {
    if (this.activeCategory) {
      this.questionsFaqs = this.allQuestionsFaqs.filter(
        (question) => question.categoryId === this.activeCategory.id
      );
    }
  }

  toggle(item: QuestionsFaqs) {
    this.questions.map((q) => {
      if (q.id === item.id) {
        q.active = false;
      }
    });
  }

  searchQuestion(): void {
    const inputValue = this.formData.get('question')?.value;
    if (!inputValue) {
      return;
    }

    const normalizedInputValue = this.normalizeText(inputValue);
    this.questionsFaqs = this.allQuestionsFaqs.filter((question: any) =>
      this.normalizeText(question.text).includes(normalizedInputValue)
    );

    if (this.questionsFaqs.length > 0) {
      this.searchNotFound = false;
    } else {
      this.searchNotFound = true;
    }
  }

  splitText(item: QuestionsFaqs) {
    if (!item.text) return { firstPart: '', lastTwoWords: '' };

    const words = item.text.split(' ');
    if (words.length > 2) {
      const firstPart = words.slice(0, -2).join(' ');
      const lastTwoWords = words.slice(-2).join(' ');
      return { firstPart, lastTwoWords };
    } else {
      return { firstPart: item.text, lastTwoWords: '' };
    }
  }
}
