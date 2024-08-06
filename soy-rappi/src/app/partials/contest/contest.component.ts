import { HttpErrorResponse } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { StrapiHttpResponse } from 'src/app/utils/strapi/base/models/strapi-http-response';
import {
  Contest,
  ContestData,
} from 'src/app/utils/strapi/contest/models/contest';
import { ContestService } from 'src/app/utils/strapi/contest/services/contest.service';
import { UploadService } from 'src/app/utils/strapi/upload/services/upload.service';

@Component({
  selector: 'app-contest',
  templateUrl: './contest.component.html',
  styleUrls: ['./contest.component.scss'],
})
export class ContestComponent implements OnInit {
  @Input() public data: Contest | undefined;

  public isActive: number | undefined;

  public contest: ContestData | undefined;

  public formSubmitted = false;

  private contests: ContestData[] = [];

  constructor(
    public uploadService: UploadService,
    private contestService: ContestService
  ) {}

  public ngOnInit(): void {
    this.loadContests();
  }

  public selectContest(contestIndex: number, contestId: number): void {
    const contest: ContestData | undefined = this.findContestById(contestId);

    if (contest) {
      this.contest = contest;
      this.isActive = contestIndex;
    } else {
      this.loadContestById(contestId);
    }
  }

  public submitForm(): void {
    this.formSubmitted = true;
  }

  private loadContests(): void {
    this.contestService.entries().subscribe(
      (res: StrapiHttpResponse<ContestData[]>) => {
        if (res.data) {
          this.setContests(res.data);
          this.selectFirstContest();
        }
      },
      (error: HttpErrorResponse) => this.handleError(error)
    );
  }

  private setContests(data: ContestData[] | null | undefined): void {
    this.contests = data ?? [];
  }

  private selectFirstContest(): void {
    if (this.contests.length > 0) {
      this.selectContest(0, this.contests[this.contests.length - 1].id);
    }
  }

  private findContestById(contestId: number): ContestData | undefined {
    return this.contests.find((contest) => contest.id === contestId);
  }

  private loadContestById(contestId: number): void {
    this.contestService.entry(contestId).subscribe(
      (res: StrapiHttpResponse<ContestData>) => {
        if (res.data) {
          this.contest = res.data;
        }
      },
      (error: HttpErrorResponse) => this.handleError(error)
    );
  }

  private handleError(error: Error | HttpErrorResponse): void {
    // Implement error handling logic here
  }
}
