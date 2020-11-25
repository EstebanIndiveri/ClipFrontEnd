import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import {Persona} from '../models/persona.model';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {
  public persona: Persona;
  // public url:String;
  url="https://localhost:44316/api/cliente";
  constructor( private http:HttpClient) { 
    
  }

  getPersona(): Observable<Persona>{
    let header=new HttpHeaders().set('Content-Type','application/json');
    let respuesta=this.http.get<Persona>(this.url+'cliente/5', {headers:header});
    // return this.http.get<Persona[]>(this.url, {headers:header});
    console.log(respuesta);
    return respuesta;
  }

//   addUser(persona):Observable<any>{
//     let params=JSON.stringify(persona);
//     let headers=new HttpHeaders().set('Content-type','application/json')
//     return this.http.post(this.url+'api/cliente',params,{headers:headers});
// }

login(user): Observable<any> {
  return this.http.post(`${this.url}/cliente/login`, user);
}

// register(user): Observable<any> {
//   return this.http.post("/api/register", user);
// }

register(clt: Persona){
  let header = new HttpHeaders().set('Content-Type','application/json')
  let body = {
    "ID": 0,
    "Nombre": clt.Nombre,
    "Usuario":  clt.Usuario,
    "Apellido": clt.Apellido,
    "Telefono": clt.Telefono,
    "Email": clt.Email,
    "Dni": clt.Dni,
    "Cuil": clt.Cuil,
    "Direccion": clt.Direccion,
    "Nacionalidad": clt.Nacionalidad,
    "Sexo": clt.Sexo,
    "Contraseña": clt.Contraseña,
    "Sitacion_crediticia": clt.Situacion_crediticia
  }
  
  return this.http.post<string>(this.url,body,{headers:header})
}
}
