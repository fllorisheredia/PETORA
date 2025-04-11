import { Routes } from "@angular/router";





//RUTAS DE USUARIO NORMAL (USER)
import { ConsultaOnlineComponent } from "./consulta-online/consulta-online.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { MascotasComponent } from "./mascotas/mascotas.component";
import { ProductosComponent } from "./productos/productos.component";
import { UrgenciasComponent } from "./urgencias/urgencias.component";
import { UserLayoutComponent } from "./user-layout/user-layout.component";




export const userRoutes: Routes = [
  //Rutas para el usuario normal (user)
  {
    path: '',
    component: UserLayoutComponent,
    children: [
      {
        path: 'usuario',
        component: DashboardComponent,
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
      // {
      //   path: 'perfil',
      //   component: UserProfilComponent,
      // },
    ],
  },
];

export default userRoutes;
