import { Component } from '@angular/core';
// import { AppRoutingModule } from '../../app.routes';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'petora-user-layout',
  standalone: true,
  imports: [
    RouterModule
  ],
  templateUrl: './user-layout.component.html'
})
export class UserLayoutComponent {}
