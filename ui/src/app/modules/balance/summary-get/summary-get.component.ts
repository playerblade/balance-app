import { Component } from '@angular/core';
import { Income } from 'src/app/models/income/income.model';
import { Outgo } from 'src/app/models/outgo/outgo.model';
import { BaseService } from 'src/app/services/base/base.service';

@Component({
  selector: 'app-summary-get',
  templateUrl: './summary-get.component.html',
  styleUrls: ['./summary-get.component.css']
})
export class SummaryGetComponent {
  incomes: Income[] = [];
  nextPageIncome: string | null = null;
  previousPageIncome: string | null = null;
  currentPageIncomes = 1;
  pageSizeIncome = 5;
  totalPagesIncome = 0;

  // for outgoes

  outgoes: Outgo[] = [];
  nextPageOutgo: string | null = null;
  previousPageOutgo: string | null = null;
  currentPageOutgoes = 1;
  pageSizeOutgo = 5;
  totalPagesOutgo = 0;


  constructor(private baseService: BaseService) {}

  ngOnInit() {
    this.loadIncomes(this.currentPageIncomes);
    this.loadOutgoes(this.currentPageOutgoes);
  }

  loadIncomes(page: number) {
    this.baseService.getPaginated<Income>('api/income', page, this.pageSizeIncome).subscribe((response:any) => {
      this.incomes = response.results;
      this.nextPageIncome = response.next;
      this.previousPageIncome = response.previous;
      this.totalPagesIncome = response.total_pages;
    });
  }

  onNextPageIncome() {
    if (this.nextPageIncome) {
      this.currentPageIncomes++;
      this.loadIncomes(this.currentPageIncomes);
    }
  }

  onPreviousPageIncome() {
    if (this.previousPageIncome) {
      this.currentPageIncomes--;
      this.loadIncomes(this.currentPageIncomes);
    }
  }


  // for Outgoes

  loadOutgoes(page: number) {
    this.baseService.getPaginated<Outgo>('api/outgo', page, this.pageSizeOutgo).subscribe((response:any) => {
      this.outgoes = response.results;
      this.nextPageOutgo = response.next;
      this.previousPageOutgo = response.previous;
      this.totalPagesOutgo = response.total_pages;
    });
  }

  onNextPageOutgo() {
    if (this.nextPageOutgo) {
      this.currentPageOutgoes++;
      this.loadOutgoes(this.currentPageOutgoes);
    }
  }

  onPreviousPageOutgo() {
    if (this.previousPageOutgo) {
      this.currentPageOutgoes--;
      this.loadOutgoes(this.currentPageOutgoes);
    }
  }

}
