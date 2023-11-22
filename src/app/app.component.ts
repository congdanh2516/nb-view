import { Component } from '@angular/core';
import { faCircleUser } from '@fortawesome/free-solid-svg-icons';
import { ConfirmBoxModalService } from './core/services/confirm-box-modal.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'nb-view';

  faCircleUser = faCircleUser;
  panelOpenState = false;

  confirm: {
    isDisplay: boolean,
    message: string,
    isLoading: boolean,
    isCancel: boolean
  } = {isDisplay: true, message: 'abc', isLoading : false, isCancel: false}

  constructor(private confirmSV: ConfirmBoxModalService) {
    this.confirmSV.getMessage().subscribe((data) => {
      console.log("confirmmm,m: ", data);
      // this.confirm.isDisplay=data.isDisplay;
    });
    
  }
}
