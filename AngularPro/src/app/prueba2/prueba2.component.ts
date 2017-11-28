import { Component, OnInit } from '@angular/core';
import {Modelo1} from './../Modelo/Modelo1.model';

@Component({
  selector: 'app-prueba2',
  templateUrl: './prueba2.component.html',
  styleUrls: ['./prueba2.component.css']
})


export class Prueba2Component implements OnInit {

  constructor() { }

  ngOnInit(){
    this.nombre="HOLA";
    this.correo="123@accenture.com";
    this.usuario = new Modelo1;
  }
  usuario:Modelo1;

  Cambio(){
    console.log(this.usuario)
  }

  nombre:string;
  correo:string;
  contraseña:number;
  
  opciones;
  prueba =["Hola","Còmo", "Estas"];
  
  RadioChange(){
  }
  
  


}
