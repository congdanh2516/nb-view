import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExampleComponent } from './feature/farmer/farmer-process/components/example/example.component';

const routes: Routes = [
  {path: 'example', component: ExampleComponent},
  {path: 'farmer',
        loadChildren: () => import('../app/feature/farmer/farmer.module').then(x => x.FarmerModule)
    },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
