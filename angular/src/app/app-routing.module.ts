import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './components/names/list/list.component';
import { DetailsComponent } from './components/names/details/details.component';
import { AddComponent } from './components/names/add/add.component';

const routes: Routes = [
  { path: '', redirectTo: 'names', pathMatch: 'full' },
  { path: 'names', component: ListComponent },
  { path: 'names/:id', component: DetailsComponent },
  { path: 'add', component: AddComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
