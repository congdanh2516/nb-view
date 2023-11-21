import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { NotebookModificationComponent } from "./components/notebook-modification/notebook-modification.component";
import { NotebookViewComponent } from "./components/notebook-view/notebook-view.component";
import { NotebookWriteComponent } from "./components/notebook-write/notebook-write.component";

const routes: Routes = [
    {path: 'modification', component: NotebookModificationComponent},
    {path: 'view', component: NotebookViewComponent},
    {path: 'write', component: NotebookWriteComponent}
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class FarmerNotenookRoutingModule { }