import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { faTriangleExclamation } from '@fortawesome/free-solid-svg-icons';
import { Project } from 'src/app/core/models/project';
import { ProjectService } from 'src/app/core/services/project/project.service';
import { ToastBoxModalService } from 'src/app/core/services/toast-box-modal.service';
import { ProcessDetailComponent } from 'src/app/feature/farmer/farmer-process/components/process-detail/process-detail.component';
import { format } from 'src/app/utils/date-utils';

@Component({
  selector: 'app-update-project-date',
  templateUrl: './update-project-date.component.html',
  styleUrls: ['./update-project-date.component.scss'],
})
export class UpdateProjectDateComponent {
  faTriangleExclamation = faTriangleExclamation;
  isLoading: boolean = false;
  idDeletedTask: string = '';
  isTask: boolean = true; //subtask: false;
  name: any = format(this.data.projectStartAt);

  constructor(
    public dialogRef: MatDialogRef<ProcessDetailComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Project,
    private projectService: ProjectService,
    private toastSV: ToastBoxModalService
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  updateProject(): void {
    this.projectService.updateProjectById(this.data).subscribe((data: any) => {
      this.data = data;
      this.toastSV.sendMessage({
        isDisplay: true,
        message: 'Cập nhật ngày quy trình thành công',
        icon: 'success',
      });
    });
    this.dialogRef.close();
  }
}
