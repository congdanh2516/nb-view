import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { UpdateProjectNameComponent } from './update-project-name/update-project-name.component';
import { UpdateProjectDateComponent } from './update-project-date/update-project-date.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { InformationSubtaskComponent } from './information-box/information-subtask/information-subtask.component';
import { InformationTaskComponent } from './information-box/information-task/information-task.component';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    UpdateProjectNameComponent,
    UpdateProjectDateComponent,
    InformationSubtaskComponent,
    InformationTaskComponent,
  ],
  imports: [CommonModule, MatDialogModule, MatButtonModule, MatMenuModule],
  exports: [UpdateProjectNameComponent, UpdateProjectDateComponent],
})
export class SharedModule {}
