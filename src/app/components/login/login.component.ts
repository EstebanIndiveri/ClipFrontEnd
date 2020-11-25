import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PersonaService } from 'src/app/services/persona.service';
import * as M from "materialize-css/dist/js/materialize";
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public errores='';
  username: string='';
  password: string='';
  constructor(private router:Router, public userService:PersonaService) { }

  ngOnInit() {
  }

 

  login() {
    const user = {username: this.username, password: this.password};
    this.userService.login(user).subscribe( data => {
      console.log(data);
      this.redirectHome();
    });
  }


  redirectHome(){
    this.router.navigate(['/']);
    return false;
  }

  redirectRegister(){
    this.router.navigate(['/register']);
    return false;
  }
  mostrarMensajeEjemplo(){
      if(this.username==''){
        this.errores='ingrese un usuario'
        let divError = document.getElementsByClassName("errores") as HTMLCollectionOf<HTMLElement>;
        divError[0].classList.remove('hidden');
        divError[0].classList.add('animate__animated', 'animate__fadeIn');
        divError[0].innerHTML=this.errores;
        setTimeout(() => {
          let divError = document.getElementsByClassName("errores")as HTMLCollectionOf<HTMLElement>;
          divError[0].innerHTML='';
          divError[0].classList.remove('animate__animated' ,'animate__fadeIn','hidden');
          divError[0].classList.add('hidden');
        }, 3000);
      }
  }
  ejemploToast(){
    if(this.username=='' || this.password==''){
      M.toast({html: 'El usuario o contraseña son incorrectos',classes: 'rounded orange accent-2'})
      console.log('abriste el toast perro');
      
    }
  }
}
