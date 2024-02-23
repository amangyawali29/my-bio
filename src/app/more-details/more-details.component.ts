import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-more-details',
  templateUrl: './more-details.component.html',
  styleUrl: './more-details.component.scss'
})
export class MoreDetailsComponent {
  @Output() moreDetail: EventEmitter<boolean> = new EventEmitter<boolean>();


  backButton(){
    this.moreDetail.emit(false);
    const element = document.getElementById('about');
    if(element){
      // (element as HTMLElement).style.fontWeight = "700";
      element?.classList.remove("active");
    }
  }

}
