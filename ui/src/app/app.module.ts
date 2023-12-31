import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './modules/home/home.component';
import { IncomeGetComponent } from './modules/income/income-get/income-get.component';
import { IncomePostComponent } from './modules/income/income-post/income-post.component';
import { OutgoPostComponent } from './modules/outgo/outgo-post/outgo-post.component';
import { OutgoGetComponent } from './modules/outgo/outgo-get/outgo-get.component';
import { BalanceGetComponent } from './modules/balance/balance-get/balance-get.component';
import { SummaryGetComponent } from './modules/balance/summary-get/summary-get.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    IncomeGetComponent,
    IncomePostComponent,
    OutgoPostComponent,
    OutgoGetComponent,
    BalanceGetComponent,
    SummaryGetComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
