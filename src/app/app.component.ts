import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'proyecto001';

  nombre = 'Magdiel Andrés Castellanos';
  edad = 30;
  email = 'magdiel.castellanos.cursoinfotec@gmail.com';
  sueldos = [1700, 1600, 1900];
  activo = true;
  sitio = 'http://www.google.com';

  esActivo(){
    if(this.activo){
      return 'Trabajador Activo';
    }else{
      return 'trabajador Inactivo';
    }
  }

  ultimo3Sueldos(){
    let suma = 0;
    for(let i = 0;  i < this.sueldos.length; i++){
      suma += this.sueldos[i];
    }
    return suma;
  }
}
