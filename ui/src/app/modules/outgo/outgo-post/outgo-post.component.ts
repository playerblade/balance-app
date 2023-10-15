import { Component } from '@angular/core';
import { Outgo } from 'src/app/models/outgo/outgo.model';
import { BaseService } from 'src/app/services/base/base.service';

@Component({
  selector: 'app-outgo-post',
  templateUrl: './outgo-post.component.html',
  styleUrls: ['./outgo-post.component.css']
})
export class OutgoPostComponent {
  amount!: null;
  items!: string;
  description!: string;
  balance: number = 1;

  constructor(private baseService: BaseService) {}

  save() {
    const outgoData: Outgo = new Outgo({
      amount: this.amount,
      items: this.items,
      description: this.description,
      balance: this.balance
    });

    console.log('Outgo created:', outgoData);
    
    this.baseService.post<Outgo>('api/outgo/', outgoData).subscribe((response) => {
      this.amount = null;
      this.items = '';
      this.description = '';
      
      console.log(response);
      
    });
  }
}
