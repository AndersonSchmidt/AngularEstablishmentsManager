import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EstablishmentsComponent } from './establishments/establishments.component';

const routes: Routes = [
  { path: '', redirectTo: '/establishments', pathMatch: 'full' },
  { path: 'establishments', component: EstablishmentsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
