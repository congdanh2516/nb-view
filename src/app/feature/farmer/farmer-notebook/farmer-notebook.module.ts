import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotebookModificationComponent } from './components/notebook-modification/notebook-modification.component';
import { NotebookViewComponent } from './components/notebook-view/notebook-view.component';
import { FarmerNotenookRoutingModule } from './farmer-notebook-routing.module';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    NotebookModificationComponent,
    NotebookViewComponent
  ],
  imports: [
    CommonModule,
    FarmerNotenookRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
})
export class FarmerNotebookModule { }

