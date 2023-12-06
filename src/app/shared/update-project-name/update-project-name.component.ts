import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { faTriangleExclamation } from '@fortawesome/free-solid-svg-icons';
import { Project } from 'src/app/core/models/project';
import { ProjectService } from 'src/app/core/services/project/project.service';
import { ToastBoxModalService } from 'src/app/core/services/toast-box-modal.service';
import { ProcessDetailComponent } from 'src/app/feature/farmer/farmer-process/components/process-detail/process-detail.component';

@Component({
  selector: 'app-update-project-name',
  templateUrl: './update-project-name.component.html',
  styleUrls: ['./update-project-name.component.scss'],
})
export class UpdateProjectNameComponent {
  faTriangleExclamation = faTriangleExclamation;
  isLoading: boolean = false;
  idDeletedTask: string = '';
  isTask: boolean = true; //subtask: false;
  
  constructor(
    public dialogRef: MatDialogRef<ProcessDetailComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private projectService: ProjectService,
    private toastSV: ToastBoxModalService
  ) {}
  onNoClick(): void {
    this.dialogRef.close();
  }

  onYesClick(): void {
    this.updateProject();
    this.dialogRef.close();
  }

  updateProject() {
    this.isLoading = false;
    this.projectService.updateProjectById(this.data).subscribe((data: any) => {
      this.data = data;
      this.toastSV.sendMessage({
        isDisplay: true,
        message: 'Cập nhật tên quy trình thành công',
        icon: 'success',
      });
    });
  }
}
