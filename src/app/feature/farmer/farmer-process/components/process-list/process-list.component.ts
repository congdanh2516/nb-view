import { Component } from '@angular/core';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { ConfirmBoxModalService } from 'src/app/core/services/confirm-box-modal.service';
import { ProjectService } from 'src/app/core/services/project/project.service';

@Component({
  selector: 'app-process-list',
  templateUrl: './process-list.component.html',
  styleUrls: ['./process-list.component.scss'],
})
export class ProcessListComponent {
  faPlus = faPlus;
  personalProcessBool: Boolean = false; //true: co quy trinh, false: chua co quy trinh
  projectList: Array<any> = [];
  projectListByCreatorId: Array<any> = [];

  constructor(
    private confirmSV: ConfirmBoxModalService,
    private projectSV: ProjectService
  ) {
    this.confirmSV.getMessage().subscribe((data) => {
      console.log('data: ', data);
      if (data.action == 'close') {
        if (data.acceptance) {
          this.addNewProcess2();
        }
      }
    });
  }

  addNewProcess() {
    this.confirmSV.sendMessage({
      isDisplay: true,
      message: {
        title: 'abc',
        description: 'xyz',
      },
    });
  }

  addNewProcess2() {
    console.log('Add new process');
  }

  getAllProject() {
    this.projectSV.getAllProject().subscribe({
      next: (data: any) => {
        this.projectList = data;
        console.log('data:', this.projectList);
      },
      error: () => {
        console.log('error: getAllProject');
      },
    });
  }

  getAllProjectByCreatorId(creatorId: any) {
    this.projectSV.getAllProjectByCreatorId(creatorId).subscribe({
      next: (data: any) => {
        this.projectListByCreatorId = data;
        console.log('data 1: ', this.projectListByCreatorId);
      },
      error: () => {
        console.log('error: getAllProjectByCreatorId');
      },
    });
  }
}
