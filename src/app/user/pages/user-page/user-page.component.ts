import { ChangeDetectionStrategy, Component } from '@angular/core';
import { UserLayoutComponent } from "../../user-layout/user-layout.component";

@Component({
  selector: 'petora-user-page',
  imports: [UserLayoutComponent],
  templateUrl: './user-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserPageComponent { }
