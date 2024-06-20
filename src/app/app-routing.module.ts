import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SackiteyFormComponent } from './sackitey-form/sackitey-form.component';
import { SackiteyAboutComponent } from './sackitey-about/sackitey-about.component';
import { SackiteyNotfoundComponent } from './sackitey-notfound/sackitey-notfound.component';
import { SackiteyHomeComponent } from './sackitey-home/sackitey-home.component';

const routes: Routes = [
  { path: '', component: SackiteyHomeComponent }, 
  { path: 'form', component: SackiteyFormComponent },
  { path: 'about', component: SackiteyAboutComponent },
  { path: 'notfound', component: SackiteyNotfoundComponent}, 
  { path: '**', redirectTo: 'notfound' } 
];

;

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
