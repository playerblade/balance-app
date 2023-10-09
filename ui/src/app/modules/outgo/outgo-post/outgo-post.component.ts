import { Component } from '@angular/core';
import { BaseService } from 'src/app/services/base/base.service';

@Component({
  selector: 'app-outgo-post',
  templateUrl: './outgo-post.component.html',
  styleUrls: ['./outgo-post.component.css']
})
export class OutgoPostComponent {
  amount!: number;
  items!: string;
  description!: string;
  balance: number = 1;


  constructor(private baseService: BaseService) {}

  save() {
    const outgoData = {
      amount: this.amount,
      items: this.items,
      description: this.description,
      balance: this.balance
    };

    console.log('Outgo created:', outgoData);
    
    this.baseService.post<any>('api/outgo/', outgoData).subscribe((response) => {
      this.amount = 0;
      this.items = '';
      this.description = '';
    });
  }
}
