import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import {Persona} from '../models/persona.model';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {
  url="https://localhost:44316/api/cliente/2";
  constructor( private http:HttpClient) { 
    console.log("Persona service is running");
  }

  getPersonas(): Observable<Persona[]>{
    let header=new HttpHeaders().set('Content-Type','application/json');
    let respuesta=this.http.get<Persona[]>(this.url, {headers:header});
    // return this.http.get<Persona[]>(this.url, {headers:header});
    console.log(respuesta);
    return respuesta;
    
    

  }
}
