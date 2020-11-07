import { Component, } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent{
  title = 'Programa Clip';

  // @ViewChild (HeaderComponent) child;
  
  opened=false;
  
  // opened=false;

  toogleSidebar(){
    this.opened=!this.opened;
    // console.log('app');
  }
  
}
