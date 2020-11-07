import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent  {
  title="Programa Clip 2020";
  
  constructor() { }
  opened=false;

  toogleSidebar(){
    this.opened=!this.opened;
    console.log('header');
    
  }


}
