import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SinglePageComponent } from './pages/single-page/single-page.component';

const routes: Routes = [
  { path: '', component: SinglePageComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'top',
    enableTracing: false
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
