import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-header-component',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './header-component.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponentComponent { }
