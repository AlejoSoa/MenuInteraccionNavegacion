import { Routes } from '@angular/router';
import { InformacionHtml } from './informacion/informacion-html/informacion-html';
import { InformacionBuscar } from './informacion/informacion-buscar/informacion-buscar';
import { InformacionInicio } from './informacion/informacion-inicio/informacion-inicio';
export const routes: Routes = [
  { path: 'infoA', component: InformacionInicio },
  { path: 'infoB', component: InformacionBuscar },
  { path: 'infoC', component: InformacionHtml },
  { path: '', redirectTo: 'infoA', pathMatch: 'full' },
];
