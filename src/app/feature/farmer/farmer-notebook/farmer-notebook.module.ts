import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotebookModificationComponent } from './components/notebook-modification/notebook-modification.component';
import { NotebookViewComponent } from './components/notebook-view/notebook-view.component';
import { FarmerNotenookRoutingModule } from './farmer-notebook-routing.module';



@NgModule({
  declarations: [
    NotebookModificationComponent,
    NotebookViewComponent
  ],
  imports: [
    CommonModule,
    FarmerNotenookRoutingModule
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
})
export class FarmerNotebookModule { }
