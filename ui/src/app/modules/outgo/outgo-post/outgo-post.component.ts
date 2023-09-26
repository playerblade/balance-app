import { Component } from '@angular/core';

@Component({
  selector: 'app-outgo-post',
  templateUrl: './outgo-post.component.html',
  styleUrls: ['./outgo-post.component.css']
})
export class OutgoPostComponent {
  save(){
    console.log("save");
    
  }
}
