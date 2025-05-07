import { Routes } from "@angular/router";





//RUTAS DE USUARIO NORMAL (USER)
import { ConsultaOnlineComponent } from "./consulta-online/consulta-online.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { MascotasComponent } from "./mascotas/mascotas.component";
import { ProductosComponent } from "./productos/productos.component";
import { UrgenciasComponent } from "./urgencias/urgencias.component";
import { UserLayoutComponent } from "./user-layout/user-layout.component";
import { UserPageComponent } from "./pages/user-page/user-page.component";
import { ContactPageComponent } from "../pages/contact-page/contact-page.component";




export const userRoutes: Routes = [
  //Rutas para el usuario normal (user)
  {
    path: '',
    component: UserPageComponent,
    children: [

      {
        path: 'usuario',
        component: UserPageComponent,
      },
      {
        path: 'dashboard',
        component: DashboardComponent,
      },
      {
        path: 'mascotas',
        component: MascotasComponent,
      },
      {
        path: 'productos',
        component: ProductosComponent,
      },
      {
        path: 'urgencias',
        component: UrgenciasComponent,
      },
      {
        path: 'consulta-online',
        component: ConsultaOnlineComponent,
      },

      {
        path: 'contacto',
        component: ContactPageComponent,
      },
      // {
      //   path: 'perfil',
      //   component: UserProfilComponent,
      // },
    ],
  },
];

export default userRoutes;
