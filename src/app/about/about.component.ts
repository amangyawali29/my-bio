import { Component, EventEmitter, Output } from '@angular/core';
import { abort } from 'node:process';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {
  showMore : boolean = false;
  buttonText: string = "Learn More "
  @Output() moreDetail: EventEmitter<boolean> = new EventEmitter<boolean>();

  showMoredetails(){
    if(!this.showMore){
      this.showMore = true;
      this.buttonText = "Back";
    }else{
      this.showMore = false;
      this.buttonText = "Learn More ";
    }
  }

}
