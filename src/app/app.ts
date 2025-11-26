import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navegacion } from './navegacion/navegacion';
import { Interaccion } from './interaccion/interaccion';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navegacion, Interaccion],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('NavegacionInteraccion');
}
