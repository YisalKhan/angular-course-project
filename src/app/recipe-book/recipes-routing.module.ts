import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RecipeBookComponent } from './recipe-book.component';
import { RecipeEditComponent } from './recipe-edit/recipe-edit.component';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';
import { AuthGuardService} from '../auth/auth-guard.service';

const recipeRoutes : Routes = [
  { path: '', component: RecipeBookComponent, children: [
    { path: 'new', component: RecipeEditComponent, canActivate: [AuthGuardService] },
    { path: ':id', component: RecipeDetailComponent },
    { path: ':id/edit', component: RecipeEditComponent, canActivate: [AuthGuardService] },
  ] },
]

@NgModule ({
  declarations: [

  ],
  imports: [
    RouterModule.forChild(recipeRoutes)
  ],
  exports: [
    RouterModule
  ]
})

export class RecipeRoutingModule {

}