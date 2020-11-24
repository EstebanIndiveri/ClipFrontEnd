import { Component, OnInit } from '@angular/core';
import {PersonaService} from '../../services/persona.service';
import {Persona} from '../../models/persona.model';

@Component({
  selector: 'app-personas',
  templateUrl: './personas.component.html',
  styleUrls: ['./personas.component.scss']
})
export class PersonasComponent implements OnInit {
  public cliente: Persona;
  // public nombre: String;
  // public apellido:String;

  constructor(private personaService:PersonaService) { }

  ngOnInit(): void {
    this.personaService.getPersona().subscribe(resp=>{
      console.log(resp);
      this.cliente=resp; 
      // this.nombre=this.cliente.nombre;
      // this.apellido=this.cliente.apellido;
      
    })
    
  }
  
  nuevaPersona(){
    alert("Nueva Persona - event Binding ok");
  }
  

}
