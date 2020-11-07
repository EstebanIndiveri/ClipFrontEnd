import { Component, OnInit } from '@angular/core';
import {PersonaService} from '../../services/persona.service';
import {Persona} from '../../models/persona.model';

@Component({
  selector: 'app-personas',
  templateUrl: './personas.component.html',
  styleUrls: ['./personas.component.scss']
})
export class PersonasComponent implements OnInit {
  angular="https://angular.io/";
  public personas: Persona[];

  constructor(private personaService:PersonaService) { }

  ngOnInit(): void {
    this.personaService.getPersonas().subscribe(resp=>{
      console.log(resp);
  
      this.personas=resp; 
    })
  }

  nuevaPersona(){
    alert("Nueva Persona - event Binding ok");
  }
  

}
