import {ChangeDetectionStrategy, Component, inject, input} from '@angular/core';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-popup',
  templateUrl: './popup/popup.component.html',
  imports: [MatButtonModule]
})
export class PopupComponent {
  data: any = input();
}
