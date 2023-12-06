import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ConfirmBoxModalComponent } from './confirm-box-modal/confirm-box-modal.component';
import { ToastBoxModalComponent } from './toast-box-modal/toast-box-modal.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { UpdateProjectNameComponent } from './update-project-name/update-project-name.component';
import { UpdateProjectDateComponent } from './update-project-date/update-project-date.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { LoaderComponent } from './loader/loader.component';
import { ErrorMessageComponent } from './error-message/error-message.component';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    ConfirmBoxModalComponent,
    ToastBoxModalComponent,
    UpdateProjectNameComponent,
    UpdateProjectDateComponent,
    LoaderComponent,
    ErrorMessageComponent,
  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
    CommonModule,
    MatDialogModule,
    MatButtonModule,
    MatMenuModule,
  ],
  exports: [
    HeaderComponent,
    ConfirmBoxModalComponent,
    ToastBoxModalComponent,
    UpdateProjectNameComponent,
    UpdateProjectDateComponent,
    LoaderComponent,
    ErrorMessageComponent,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class SharedModule {}
