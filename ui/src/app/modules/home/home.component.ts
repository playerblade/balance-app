import { Component, ElementRef, AfterViewInit, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements AfterViewInit, OnInit{
  @ViewChild('headerShow', { static: false }) headerShow!: ElementRef;
  @ViewChild('headerHidden', { static: false }) headerHidden!: ElementRef;

  ngAfterViewInit() {
    this.toggleHeaderHidden();
  }

  ngOnInit(): void {
    console.log("HII");
    
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
  
}
