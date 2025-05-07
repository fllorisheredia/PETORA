import { ChangeDetectionStrategy, Component } from '@angular/core';
import { HeaderComponentComponent } from "../../shared/components/header-component/header-component.component";
import { FooterComponent } from "../../shared/components/footer/footer.component";
import { UserLayoutComponent } from "../../user/user-layout/user-layout.component";

@Component({
  selector: 'app-principal-page',
  imports: [HeaderComponentComponent, FooterComponent, UserLayoutComponent],
  templateUrl: './principal-page.component.html',



})
export class PrincipalPageComponent { }
