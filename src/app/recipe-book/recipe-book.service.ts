import { Injectable, EventEmitter } from '@angular/core';
import { Recipe } from './recipe-book.model';

@Injectable({ providedIn: 'root' })
export class RecipeBookService {
  recipeSelected = new EventEmitter<Recipe>();
  
  private recipes: Recipe[] = [
    new Recipe(
      'Milanesio esio eso',
      'This is just a test description',
      'https://images.pexels.com/photos/4551832/pexels-photo-4551832.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    ),
    new Recipe(
      'Periquito pin pin',
      'This is just a test description 2 22 2',
      'https://images.pexels.com/photos/4551832/pexels-photo-4551832.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    )
  ];

  getRecipes() {
    return this.recipes.slice();
  }
}
