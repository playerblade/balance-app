import { Component, ElementRef, AfterViewInit, OnInit, ViewChild } from '@angular/core';
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
  constructor(private baseService: BaseService) {}

  ngAfterViewInit() {
    this.toggleHeaderHidden();
  }

  ngOnInit() {
    console.log("hi");
    
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

  // private showModal(){
  //   this.myModal.nativeElement.addEventListener('shown.bs.modal', () => {
  //     this.myInput.nativeElement.focus();
  //   });
  // }
  
}
