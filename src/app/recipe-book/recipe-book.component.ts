import { RecipeBookService } from './recipe-book.service';
import { Component, Input, OnInit } from '@angular/core';
import { Recipe } from './recipe-book.model';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe-book.component.html'
})
export class RecipeComponent implements OnInit {
  selectedRecipe: Recipe;

  constructor(private recipeBookService: RecipeBookService) {}

  ngOnInit(): void {
    this.recipeBookService.recipeSelected.subscribe((recipe: Recipe) => {
      this.selectedRecipe = recipe;
    });
  }
}
