import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NamesListComponent } from './components/names-list/names-list.component';
import { NameDetailsComponent } from './components/name-details/name-details.component';
import { AddNameComponent } from './components/add-name/add-name.component';

const routes: Routes = [
  { path: '', redirectTo: 'tutorials', pathMatch: 'full' },
  { path: 'tutorials', component: NamesListComponent },
  { path: 'tutorials/:id', component: NameDetailsComponent },
  { path: 'add', component: AddNameComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
