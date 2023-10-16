import { Component, ElementRef, AfterViewInit, OnInit, ViewChild } from '@angular/core';
import { Balance } from 'src/app/models/balance/balance.model';
import { Income } from 'src/app/models/income/income.model';
import { Outgo } from 'src/app/models/outgo/outgo.model';
import { BaseService } from 'src/app/services/base/base.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements AfterViewInit, OnInit{
  @ViewChild('headerShow', { static: false }) headerShow!: ElementRef;
  @ViewChild('headerHidden', { static: false }) headerHidden!: ElementRef;

  data: any;
  income!: Income;
  outgo!: Outgo;
  balance!: Balance;

  constructor(private baseService: BaseService) {}

  ngAfterViewInit() {
    this.toggleHeaderHidden();
  }

  ngOnInit() {
    this.getLastIncome();
    this.getLastOutgo();
    this.getLastBalance();
  }

  showModal() {
    let myModal = document.getElementById('myModal');
    let myInput = document.getElementById('myInput');
    myModal!.addEventListener('shown.bs.modal', function () {
      myInput!.focus()
    })
  }

  private toggleHeaderHidden() {
    const headerShow = this.headerShow.nativeElement as HTMLElement;
    const headerHidden = this.headerHidden.nativeElement as HTMLElement;
    
    if (window.innerWidth <= 720) {
      headerShow.style.display = 'none';
    }else{
      headerHidden.style.display = 'none';
    }
  }

  getLastIncome(){
    this.baseService.getLast<Income>('api/income/last/').subscribe((response:any) => {
      this.income = response;
      console.log("Last Income", this.income);
    });
  }

  getLastOutgo(){
    this.baseService.getLast<Outgo>('api/outgo/last/').subscribe((response:any) => {
      this.outgo = response;
      console.log("Last Outgo", this.outgo);
    });
  }

  getLastBalance(){
    this.baseService.getLast<Balance>('api/balance/last/').subscribe((response:any) => {
      this.balance = response;
      console.log("Last Balance", this.balance);
    });
  }
  
}
