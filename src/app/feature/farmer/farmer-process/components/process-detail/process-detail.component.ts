import { Component, Input, ViewChild } from '@angular/core';
import { MatMenuTrigger } from '@angular/material/menu';
import { Project } from 'src/app/core/models/project';
import { UpdateProjectNameComponent } from 'src/app/shared/update-project-name/update-project-name.component';
import { MatDialog } from '@angular/material/dialog';
import { UpdateProjectDateComponent } from 'src/app/shared/update-project-date/update-project-date.component';
import { ActivatedRoute } from '@angular/router';
import { ProjectService } from 'src/app/core/services/project/project.service';
import { TaskService } from 'src/app/core/services/task/task.service';
import { SubtaskService } from 'src/app/core/services/subtask/subtask.service';
import { format } from 'src/app/utils/date-utils';
import { InformationTaskComponent } from 'src/app/shared/information-box/information-task/information-task.component';
import { InformationSubtaskComponent } from 'src/app/shared/information-box/information-subtask/information-subtask.component';

@Component({
  selector: 'app-process-detail',
  templateUrl: './process-detail.component.html',
  styleUrls: ['./process-detail.component.scss'],
})
export class ProcessDetailComponent {
  @ViewChild(MatMenuTrigger) trigger!: MatMenuTrigger;
  @Input() project: any;
  isDisabledName: boolean = true;
  isDisabledInfor: boolean = true;
  taskList: Array<any> = [];
  subtaskList: Array<any> = [];
  projectId: string = '';
  panelOpenState = false;

  constructor(
    private dialog: MatDialog,
    private route: ActivatedRoute,
    private ProjectSV: ProjectService,
    private TaskSV: TaskService
  ) {
    this.route.params.subscribe((params: any) => {
      this.projectId = params.id;
      this.getProjectById(params.id);
      this.getTaskListByProjectId(params.id);
    });
  }

  removeDisabledName() {
    if (this.isDisabledName) {
      this.isDisabledName = false;
    } else {
      this.isDisabledName = true;
    }
  }

  removeDisabledInfor() {
    if (this.isDisabledInfor) {
      this.isDisabledInfor = false;
    } else {
      this.isDisabledInfor = true;
    }
  }

  someMethod() {
    this.trigger.openMenu();
  }

  handleOnClick(event: Event): void {
    event.stopPropagation();
  }

  show(x: any) {
    console.log('x: ', x);
  }

  trackByFn(index: any, item: any) {
    return item.taskId;
  }

  trackByFnn(index: any, item: any) {
    return item.subTaskId;
  }

  updateDialogProjectName(project: Project) {
    const dialogRef = this.dialog.open(UpdateProjectNameComponent, {
      width: '500px',
      data: {
        projectId: project.projectId,
        projectName: project.projectName,
      },
    });
    dialogRef.afterClosed().subscribe(() => {
      this.getProjectListNSchedule();
    });
  }

  updateDialogProjectDate(project: Project) {
    const dialogRef = this.dialog.open(UpdateProjectDateComponent, {
      width: '500px',
      data: {
        projectId: project.projectId,
        projectStartAt: project.projectStartAt,
      },
    });
    dialogRef.afterClosed().subscribe(() => {
      this.getProjectListNSchedule();
    });
  }

  handleUpdateName(event: Event) {
    if (!this.isDisabledName) {
      this.project.projectName = (event.target as HTMLInputElement).value;
      this.isDisabledName = true;
      this.updateDialogProjectName(this.project);
    }
  }

  handleUpdateDate(event: Event) {
    if (!this.isDisabledInfor) {
      this.project.projectStartAt = (event.target as HTMLInputElement).value;
      this.isDisabledInfor = true;
      this.updateDialogProjectDate(this.project);
    }
  }

  getProjectById(projectId: string) {
    this.ProjectSV.getProjectById(projectId).subscribe({
      next: (data: any) => {
        this.project = data;
      },
      error: (error) => {
        console.log(error);
      },
    });
  }

  getTaskListByProjectId(projectId: string) {
    this.TaskSV.getTaskListByProjectId(projectId).subscribe({
      next: (task: any) => {
        this.taskList = task;
        for (let i = 0; i < this.taskList.length; i++) {
          this.TaskSV.getSubtaskList(this.taskList[i].taskId).subscribe(
            (subtaskList) => {
              this.taskList[i].subtask = subtaskList;
            }
          );
        }
        const tasks = task.map((item: any) => {
          return {
            ...item,
            taskStartAt: item.taskStartAt ? format(item.taskStartAt) : null,
            taskEndAt: item.taskEndAt ? format(item.taskEndAt) : null,
          };
        });
        console.log('task', tasks);
        this.taskList = tasks;
        console.log('call api get all tasks successfully!' + task);
      },
    });
  }

  getTaskById(taskId: any) {
    const dialogRef = this.dialog.open(InformationTaskComponent, {
      width: '500px',
      data: {
        taskId: taskId,
      },
    });
  }

  getSubtasksById(subtaskId: any) {
    const dialogRef = this.dialog.open(InformationSubtaskComponent, {
      width: '500px',
      data: {
        subtaskId: subtaskId,
      },
    });
  }

  getProjectListNSchedule() {
    this.ProjectSV.scheduleProcess(this.projectId).subscribe({
      next: (res) => {
        this.getTaskListByProjectId(this.projectId);
        this.getProjectById(this.project);
      },
      error: (error) => {},
    });
  }
}
