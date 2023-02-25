import { RecipeBookService } from './../recipe-book.service';
import { Recipe } from '../recipe-book.model';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html'
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[];

  constructor(private recipeBookService: RecipeBookService) {}

  ngOnInit(): void {
    this.recipes = this.recipeBookService.getRecipes();
  }
}
