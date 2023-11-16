import { Component } from '@angular/core';
import { faCircleUser } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'nb-view';

  faCircleUser = faCircleUser;
  panelOpenState = false;
}
