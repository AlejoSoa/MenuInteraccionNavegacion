import { Injectable } from '@angular/core';
import { signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Servicio {
  titulo = signal('Menu');

  lista = signal<string[]>([]);
  contenido = signal('Selecciona');

  cambiarTitulo(titulo: string) {
    this.titulo.set(titulo);
  }

  cambiarLista(lista: string[]) {
    this.lista.set(lista);
  }

  mostrarContenido(texto: string) {
    this.contenido.set(texto);
  }
}
