import { Component } from '@angular/core';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { ConfirmBoxModalService } from 'src/app/core/services/confirm-box-modal.service';

@Component({
  selector: 'app-process-list',
  templateUrl: './process-list.component.html',
  styleUrls: ['./process-list.component.scss']
})
export class ProcessListComponent {
  faPlus = faPlus;
  personalProcessBool : Boolean = false; //true: co quy trinh, false: chua co quy trinh

  constructor(private confirmSV: ConfirmBoxModalService) {
    this.confirmSV.getMessage().subscribe((data) => {
      console.log("data: ", data);
      if(data.action=='close') {
        if(data.acceptance) {
          this.addNewProcess2();
        }
      }
    })
  }

  addNewProcess() {
    this.confirmSV.sendMessage({
      isDisplay: true,
      message: {
        title: 'abc',
        description: 'xyz'
      }
    })
  }

  addNewProcess2() {
    console.log("Add new process");
  }
}
