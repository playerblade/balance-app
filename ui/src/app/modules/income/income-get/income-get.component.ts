import { Component, OnInit} from '@angular/core';
import { BaseService } from 'src/app/services/base/base.service';
import { Income } from 'src/app/models/income/income.model';

@Component({
  selector: 'app-income-get',
  templateUrl: './income-get.component.html',
  styleUrls: ['./income-get.component.css']
})
export class IncomeGetComponent {

  incomes!: Income[];
  constructor(private baseService: BaseService) {}

  ngOnInit() {
    this.baseService.get<Income[]>('api/income').subscribe((response) => {
      this.incomes = response;
    });
  }
}
