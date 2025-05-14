import { ChangeDetectionStrategy, Component } from '@angular/core';
import { HeaderComponentComponent } from '../../shared/components/header-component/header-component.component';
import { FooterComponent } from '../../shared/components/footer/footer.component';

@Component({
  selector: 'contact-page',
  imports: [HeaderComponentComponent, FooterComponent],
  templateUrl: './contact-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContactPageComponent { }
