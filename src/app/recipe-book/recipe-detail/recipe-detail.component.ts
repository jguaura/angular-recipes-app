import { RecipeBookService } from './../recipe-book.service';
import { Ingredient } from './../../shared/ingredient.model';
import { Component, Input, OnInit } from '@angular/core';
import { Recipe } from '../recipe-book.model';
import {
  ActivatedRoute,
  Params
} from '@angular/router';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html'
})
export class RecipeDetailComponent implements OnInit {
  recipe: Recipe;
  constructor(
    private recipeService: RecipeBookService,
    private route: ActivatedRoute
  ) {}
  onClickBtn() {
    this.recipeService.addIngredientsToSL(this.recipe.ingredients);
  }
  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.recipe = this.recipeService.getRecipe(+params['id']);
    });
  }
}
