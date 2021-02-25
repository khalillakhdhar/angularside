import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConnexionComponent } from './connexion/connexion.component';
import { GestionComponent } from './gestion/gestion.component';

const routes: Routes = [
{ path:"",component:ConnexionComponent},
{path:"gestion",component:GestionComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
