import { Component, DoCheck} from '@angular/core';
import { Observable } from 'rxjs';
import { Persona } from 'src/app/models/persona.model';
import { PersonaService } from 'src/app/services/persona.service';

@Component({
  selector: 'app-new-user-form',
  templateUrl: './new-user-form.component.html',
  styleUrls: ['./new-user-form.component.scss'],
  providers:[PersonaService]
})
export class NewUserFormComponent implements DoCheck{
  // username:string;
  // email: string;
  // password: string;
  // confirmPassword: string;
  // passwordError: boolean;

  public isValid=false;

  "ID": 0;
  nombre: string=''; //required
  usuario:  string=''; //required
  apellido: string=''; //required
  telefono:string=''; //required
  email: string=''; //required
  dni: number;
  cuil:number;
  direccion:string;
  nacionalidad:string;
  sexo: string;
  password:string=''; //required
  sitacion_crediticia:string;

  constructor(public userService: PersonaService) {} 
  async register() {
   
    let user:Persona = await new Persona();
    user.Email=this.email.trim();
    user.Apellido=this.apellido.trim();
    user.Contraseña=this.password.trim();
    user.Telefono=this.telefono;
    user.Usuario=this.usuario.trim();
    user.ID=0;
    user.Nombre=this.nombre.trim();
    
    this.userService.register(user).subscribe(data => {
      console.log(data);
      // console.log(user);
    });
  }
  ngDoCheck(){
    //Called every time that the input properties of a component or a directive are checked. Use it to extend change detection by performing a custom check.
    //Add 'implements DoCheck' to the class.
    if(this.usuario !=''&&this.apellido !=''&&this.nombre !=''&&this.telefono !=''&&this.email !=''){
      this.isValid=true;
      console.log('sigo mal');
      
    }
  }	
 
}



