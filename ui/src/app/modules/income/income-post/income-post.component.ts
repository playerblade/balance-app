import { Component } from '@angular/core';
import { Income } from 'src/app/models/income/income.model';
import { BaseService } from 'src/app/services/base/base.service';

@Component({
  selector: 'app-income-post',
  templateUrl: './income-post.component.html',
  styleUrls: ['./income-post.component.css']
})
export class IncomePostComponent {

  amount!: null;
  description!: string;
  balance: number = 1;

  constructor(private baseService: BaseService) {}

  save() {
    const incomeData: Income = new Income({
      amount: this.amount,
      description: this.description,
      balance: this.balance
    });

    console.log('Icome created:', incomeData);
    
    this.baseService.post<Income>('api/income/', incomeData).subscribe((response) => {
      this.amount = null;
      this.description = '';
      
      console.log(response);
      
    });
  }

}
