import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { NgModule } from '@angular/core';
import { RecipeComponent } from './recipe-book/recipe-book.component';
import { RouterModule, Routes } from "@angular/router";

const appRoutes: Routes = [
  { path: 'recipes', component: RecipeComponent },
  { path: 'shopping-list', component: ShoppingListComponent },
  { path: '**', redirectTo: '/recipes' }
]

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})

export class AppRoutingModule {}