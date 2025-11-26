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

    if (i === 0) {
      const menu = (this.titulo && typeof this.titulo === 'function') ? this.titulo() : '';
      if (menu === 'Home') {
        this.router.navigate(['/infoA']);
      } else if (menu === 'Search') {
        this.router.navigate(['/infoB']);
      } else if (menu === 'HTML') {
        this.router.navigate(['/infoC']);
      }
    }
  }
}
