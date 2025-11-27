import { Routes } from '@angular/router';
import { InformacionHtml } from './informacion/informacion-html/informacion-html';
import { InformacionBuscar } from './informacion/informacion-buscar/informacion-buscar';
import { InformacionInicio } from './informacion/informacion-inicio/informacion-inicio';
import { InformacionFicha } from './informacion/informacion-ficha/informacion-ficha';
export const routes: Routes = [
  { path: 'informacionInicio', component: InformacionInicio },
  { path: 'informacionBuscar', component: InformacionBuscar },
  { path: 'informacionHtml', component: InformacionHtml },
  { path: 'informacionFicha', component: InformacionFicha },
  { path: '', redirectTo: 'informacionInicio', pathMatch: 'full' },
];
