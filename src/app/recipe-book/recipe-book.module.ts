import { RecipeComponent } from './recipe-book.component';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';
import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { RecipeItemComponent } from './recipe-item/recipe-item.component';

import { NgModule } from '@angular/core';

@NgModule({
  declarations: [RecipeComponent, RecipeDetailComponent, RecipeListComponent, RecipeItemComponent],
  exports: [RecipeComponent, RecipeDetailComponent, RecipeListComponent, RecipeItemComponent],
  imports: []
})

export class RecipeBookModule {}