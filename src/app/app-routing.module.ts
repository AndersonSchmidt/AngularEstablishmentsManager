import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EstablishmentsComponent } from './establishments/establishments.component';
import { EstablishmentDetailComponent } from './establishments/establishment-detail/establishment-detail.component';

const routes: Routes = [
  { path: '', redirectTo: '/establishments', pathMatch: 'full' },
  { path: 'establishments', component: EstablishmentsComponent },
  { path: 'establishments/:id', component: EstablishmentDetailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
