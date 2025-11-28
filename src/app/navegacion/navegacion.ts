import { Component, OnInit } from '@angular/core';
import { Servicio } from '../servicios/servicio';
import { RouterLinkActive } from '@angular/router';


@Component({
  selector: 'app-navegacion',
  imports: [RouterLinkActive],
  templateUrl: './navegacion.html',
  styleUrl: './navegacion.scss',
})
export class Navegacion implements OnInit {
  constructor(private shared: Servicio ) {}

  ngOnInit(): void {
    this.cambiarMenu(1);
  }

  cambiarMenu(menu: number) {
    switch (menu) {
      case 1:
        this.shared.cambiarTitulo("Home");
        this.shared.cambiarLista(["Introduccion", "3066474", "Contacto", ":V", 
        ]);
        break;

      case 2:
        this.shared.cambiarTitulo("Search");
        this.shared.cambiarLista(["Buscar", "XD"
        ]);
        break;

      case 3:
        this.shared.cambiarTitulo("HTML");
        this.shared.cambiarLista(["HTML", ":)",          
        ]);
        break;
    }
  }

}
