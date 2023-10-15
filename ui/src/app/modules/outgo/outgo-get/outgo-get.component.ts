import { Component } from '@angular/core';
import { Outgo } from 'src/app/models/outgo/outgo.model';
import { BaseService } from 'src/app/services/base/base.service';

@Component({
  selector: 'app-outgo-get',
  templateUrl: './outgo-get.component.html',
  styleUrls: ['./outgo-get.component.css']
})
export class OutgoGetComponent {
  outgoes: Outgo[] = [];
  nextPage: string | null = null;
  previousPage: string | null = null;
  currentPage = 1;
  pageSize = 5;
  totalPages = 0;

  constructor(private baseService: BaseService) {}

  ngOnInit() {
    this.loadOutgoes(this.currentPage);
  }

  loadOutgoes(page: number) {
    this.baseService.getPaginated<Outgo>('api/outgo', page, this.pageSize).subscribe((response:any) => {
      this.outgoes = response.results;
      this.nextPage = response.next;
      this.previousPage = response.previous;
      this.totalPages = response.total_pages;
    });
  }

  onNextPage() {
    if (this.nextPage) {
      this.currentPage++;
      this.loadOutgoes(this.currentPage);
    }
  }

  onPreviousPage() {
    if (this.previousPage) {
      this.currentPage--;
      this.loadOutgoes(this.currentPage);
    }
  }
}
