import { RouterModule, Routes } from '@angular/router';




// Importes de los componentes de las páginas
import { HomePageComponent } from './pages/Home-Page/Home-Page.component';
import { PrincipalPageComponent } from './pages/principal-page/principal-page.component';

export const routes: Routes = [
  {

    path: '',
    component: HomePageComponent,

  },

  {

    path: 'principal',
    component: PrincipalPageComponent,

  },

  {

    path: 'usuario',
    loadChildren: () => import('./user/user.routes'),

  },

];

