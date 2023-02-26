import { RecipeBookService } from './../recipe-book.service';
import { Ingredient } from './../../shared/ingredient.model';
import { Component, Input } from '@angular/core';
import { Recipe } from '../recipe-book.model';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html'
})
export class RecipeDetailComponent {
  @Input() recipe: Recipe;
  constructor(private recipeService: RecipeBookService) {}
  onClickBtn() {
    this.recipeService.addIngredientsToSL(this.recipe.ingredients)
  }
}
