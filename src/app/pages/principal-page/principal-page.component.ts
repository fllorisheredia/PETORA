import { ChangeDetectionStrategy, Component } from '@angular/core';
import { HeaderComponentComponent } from "../../shared/components/header-component/header-component.component";
import { FooterComponent } from "../../shared/components/footer/footer.component";

@Component({
  selector: 'app-principal-page',
  imports: [HeaderComponentComponent, FooterComponent],
  templateUrl: './principal-page.component.html',



})
export class PrincipalPageComponent { }
