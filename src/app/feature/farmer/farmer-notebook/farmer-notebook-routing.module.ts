import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { NotebookModificationComponent } from "./components/notebook-modification/notebook-modification.component";

const routes: Routes = [
    {path: 'modification', component: NotebookModificationComponent}
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class FarmerNotenookRoutingModule { }