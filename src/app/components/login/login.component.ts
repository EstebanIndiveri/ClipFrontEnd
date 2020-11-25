import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PersonaService } from 'src/app/services/persona.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  username: string;
  password: string;
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
}
