import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  title="Programa Clip 2020";
  
  constructor() { }

  ngOnInit(): void {
  }

}
