import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ConfirmBoxModalComponent } from './confirm-box-modal/confirm-box-modal.component';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    ConfirmBoxModalComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HeaderComponent,
    ConfirmBoxModalComponent
  ]
})
export class SharedModule { }
