import { MatIconModule } from '@angular/material/icon';
import { BrowserModule } from '@angular/platform-browser';
import { RecipeComponent } from './recipe-book.component';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';
import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { RecipeItemComponent } from './recipe-item/recipe-item.component';
import { CdkMenuModule } from '@angular/cdk/menu';
import { MatMenuModule } from '@angular/material/menu';
import { NgModule } from '@angular/core';
@NgModule({
  declarations: [
    RecipeComponent,
    RecipeDetailComponent,
    RecipeListComponent,
    RecipeItemComponent
  ],
  exports: [
    RecipeComponent,
    RecipeDetailComponent,
    RecipeListComponent,
    RecipeItemComponent
  ],
  imports: [BrowserModule, CdkMenuModule, MatMenuModule, MatIconModule]
})
export class RecipeBookModule {}
