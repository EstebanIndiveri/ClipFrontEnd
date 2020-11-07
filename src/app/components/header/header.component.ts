import { Component,EventEmitter,Input,OnInit, Output } from '@angular/core';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Output()cerrarNav=new EventEmitter<boolean>();

  @Input()sidebar:boolean=false;

  title="Billetera Clip";
  constructor() { }

  ngOnInit() {
    
  }
  
  opened=false;


  toogleSidebarnav(){
    // this.opened=!this.opened;
    this.opened=!this.sidebar;
    console.log('header');
    this.cerrarNav.emit(this.opened);
    console.log(this.opened);
  }


}
