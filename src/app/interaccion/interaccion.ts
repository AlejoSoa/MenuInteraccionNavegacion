import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Servicio } from '@app/servicios/servicio';
import { Router } from '@angular/router';

@Component({
  selector: 'app-interaccion',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './interaccion.html',
  styleUrls: ['./interaccion.scss'],
})
export class Interaccion{
   titulo: any;
  lista: any;
  contenido: any;

  activo = signal(0);

  constructor(private shared: Servicio, private router: Router) {
    this.titulo = this.shared.titulo;
    this.lista = this.shared.lista;
    this.contenido = this.shared.contenido;
  }

  seleccionar(i: number) {
    this.activo.set(i);

    const opcion = this.lista()[i] ?? '';
    this.shared.mostrarContenido(opcion);

    const menu = this.titulo();

    if (menu === 'Home') {
      if (i === 0) {
        this.router.navigate(['/informacionInicio']);
      } else if (i === 1) {
        this.router.navigate(['/informacionFicha']);
      } 
      return; 
    }

    if (menu === 'Search') {
      if (i === 0) {
        this.router.navigate(['/informacionBuscar']);
      }
      return; 
    }

    if (menu === 'HTML') {
      if (i === 0) {
        this.router.navigate(['/informacionHtml']);
      }
      return; 
    }
  }

}
