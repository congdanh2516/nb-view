import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FarmerComponent } from './farmer.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FarmerProcessModule } from './farmer-process/farmer-process.module';
import { FarmerNotebookModule } from './farmer-notebook/farmer-notebook.module';
import { FarmerRoutingModule } from './farmer-routing.module';



@NgModule({
  declarations: [
    FarmerComponent
  ],
  imports: [
    CommonModule,
    FarmerProcessModule,
    FarmerNotebookModule,
    FontAwesomeModule,
    FarmerRoutingModule
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
})
export class FarmerModule { }
