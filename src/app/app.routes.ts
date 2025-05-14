import { RouterModule, Routes } from '@angular/router';




// Importes de los componentes de las páginas
import { HomePageComponent } from './pages/Home-Page/Home-Page.component';
import { PrincipalPageComponent } from './pages/principal-page/principal-page.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { PacksComponent } from './pages/packs/packs.component';
import { HotelesComponent } from './pages/hoteles/hoteles.component';
import { QueHacerComponent } from './pages/que-hacer/que-hacer.component';
import { VuelosComponent } from './pages/vuelos/vuelos.component';

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

    path: 'contacto',
    component: ContactPageComponent,

  },
  {

    path: 'hoteles',
    component: HotelesComponent,

  },
  {

    path: 'vuelos',
    component: VuelosComponent,

  },
  {

    path: 'packs',
    component: PacksComponent,

  },
  {

    path: 'que-hacer',
    component: QueHacerComponent,

  },

  {

    path: 'usuario',
    loadChildren: () => import('./user/user.routes'),

  },

];

