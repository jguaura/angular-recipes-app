import { Component, Input, OnInit } from '@angular/core';
import { Recipe } from './recipe-book.model';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe-book.component.html'
})
export class RecipeComponent implements OnInit {
  recipeDetails: Recipe;
  constructor() {}
  onGetRecipe(selectedRecipe: Recipe) {
    this.recipeDetails = selectedRecipe
  }
  ngOnInit(): void {}
}
