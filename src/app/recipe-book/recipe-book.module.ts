import { MatIconModule } from '@angular/material/icon';
import { BrowserModule } from '@angular/platform-browser';
import { RecipeComponent } from './recipe-book.component';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';
import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { RecipeItemComponent } from './recipe-item/recipe-item.component';
import { CdkMenuModule } from '@angular/cdk/menu';
import { MatMenuModule } from '@angular/material/menu';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { RecipeDetailStartComponent } from './recipe-detail-start/recipe-detail-start.component';
import { RecipeEditComponent } from './recipe-edit/recipe-edit.component';
@NgModule({
  declarations: [
    RecipeComponent,
    RecipeDetailComponent,
    RecipeListComponent,
    RecipeItemComponent,
    RecipeDetailStartComponent,
    RecipeEditComponent
  ],
  exports: [
    RecipeComponent,
    RecipeDetailComponent,
    RecipeListComponent,
    RecipeItemComponent
  ],
  imports: [BrowserModule, CdkMenuModule, MatMenuModule, MatIconModule, RouterModule]
})
export class RecipeBookModule {}
