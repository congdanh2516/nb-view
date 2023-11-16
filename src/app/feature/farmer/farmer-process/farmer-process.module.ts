import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FarmerProcessComponent } from './farmer-process.component';
import { ProcessListComponent } from './components/process-list/process-list.component';
import { ProcessDetailComponent } from './components/process-detail/process-detail.component';
import { ExampleComponent } from './components/example/example.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import {MatExpansionModule} from '@angular/material/expansion'; //copy tu Angular Material
import { FarmerProcessRoutingModule } from './farmer-process-routing.module';



@NgModule({
  declarations: [
    FarmerProcessComponent,
    ProcessListComponent,
    ProcessDetailComponent,
    ExampleComponent
  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
    FarmerProcessRoutingModule,

    MatExpansionModule //copy ten đe xuong day
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
})
export class FarmerProcessModule { }
