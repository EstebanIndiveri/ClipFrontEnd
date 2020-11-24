import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { PersonaService } from 'src/app/services/persona.service';

@Component({
  selector: 'app-new-user-form',
  templateUrl: './new-user-form.component.html',
  styleUrls: ['./new-user-form.component.scss'],
  providers:[PersonaService]
})
export class NewUserFormComponent implements OnInit {

  public user:any;
  public userId:any;
  public fecha:any;
  public new_client:any;
 


  constructor(
    private _personaService:PersonaService
    ) { 
      this.userId=1;
      this.new_client={
        "nombre": "",
        "apellido":'',
        'dni':'',
        'email':'',
        'telefono':'',
        'usuario':'',
        'clave':''
    };
    }

  ngOnInit() {
   
  }
  onSubmit(form){
    this._personaService.addUser(this.new_client).subscribe(
      response=>{
        console.log(response);
        alert(`Usuario creado con el nombre: ${response.name}`);
      
    })
  }
}



