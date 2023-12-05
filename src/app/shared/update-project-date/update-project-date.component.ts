import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Project } from 'src/app/core/models/project';
import { ProjectService } from 'src/app/core/services/project/project.service';
import { ProcessDetailComponent } from 'src/app/feature/farmer/farmer-process/components/process-detail/process-detail.component';

@Component({
  selector: 'app-update-project-date',
  templateUrl: './update-project-date.component.html',
  styleUrls: ['./update-project-date.component.scss'],
})
export class UpdateProjectDateComponent {
  constructor(
    public dialogRef: MatDialogRef<ProcessDetailComponent>,
    @Inject(MAT_DIALOG_DATA) public project: any,
    private projectSV: ProjectService
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  onYesClick(): void {
    this.updateProject();
  }

  updateProject() {
    console.log(this.project.projectId);
    this.projectSV.updateProjectById(this.project).subscribe({
      next: (data: any) => {
        this.project = data;
      },
    });
    this.dialogRef.close();
  }
}
