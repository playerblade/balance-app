import { Component, OnInit} from '@angular/core';
import { Observable } from 'rxjs';
import { BaseService } from 'src/app/services/base/base.service';
import { Income } from 'src/app/models/income/income.model';
import { HttpClient, HttpParams } from '@angular/common/http';

@Component({
  selector: 'app-income-get',
  templateUrl: './income-get.component.html',
  styleUrls: ['./income-get.component.css']
})
export class IncomeGetComponent {

  
  incomes: Income[] = [];
  nextPage: string | null = null;
  previousPage: string | null = null;
  currentPage = 1;
  pageSize = 5;
  totalPages = 0;

  constructor(private baseService: BaseService) {}

  ngOnInit() {
    this.loadIncomes(this.currentPage);
  }

  loadIncomes(page: number) {
    this.baseService.getPaginated<any>('api/income', page, this.pageSize).subscribe((response) => {
      this.incomes = response.results;
      this.nextPage = response.next;
      this.previousPage = response.previous;
      this.totalPages = response.total_pages;
    });
  }

  onNextPage() {
    if (this.nextPage) {
      this.currentPage++;
      this.loadIncomes(this.currentPage);
    }
  }

  onPreviousPage() {
    if (this.previousPage) {
      this.currentPage--;
      this.loadIncomes(this.currentPage);
    }
  }
}
