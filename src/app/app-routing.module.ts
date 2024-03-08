import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrincipalComponent } from './modules/principal/principal.component';
import { DetalhesComponent } from './modules/detalhes/detalhes.component';

const routes: Routes = [
  { 
    path: 'principal', 
    component: PrincipalComponent 
  },
  { 
    path: 'detalhes/:id', 
    component: DetalhesComponent 
  },
  { 
    path: '',   
    redirectTo: '/principal', 
    pathMatch: 'full'
  },
  { 
    path: '**', 
    component: PrincipalComponent 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
