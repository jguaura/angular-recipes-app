import { ShoppingListService } from './../shopping-list/shopping-list.service';
import { Ingredient } from './../shared/ingredient.model';
import { Injectable, EventEmitter } from '@angular/core';
import { Recipe } from './recipe-book.model';

@Injectable({ providedIn: 'root' })
export class RecipeBookService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      'Tasty Schnitzel',
      'A super-tasty Schnitzel - just awesome!',
      'https://media.istockphoto.com/id/1357426599/es/foto/chuleta-de-cerdo-frita-con-patatas-fritas-y-ensalada-de-verduras-frescas-sobre-mesa-de-madera.jpg?s=1024x1024&w=is&k=20&c=mvpb7KxaXCPCVc2rZhgAgfpamk0Vgh6ogdyQtWYnZk4=',
      [new Ingredient('Meat', 1), new Ingredient('French Fries', 20)]
    ),
    new Recipe( 
      'Big Fat Burger',
      'What else you need to say?',
      'https://images.pexels.com/photos/2983101/pexels-photo-2983101.jpeg',
      [new Ingredient('Buns', 2), new Ingredient('Meat', 1)]
    )
  ];

  constructor(private sLService: ShoppingListService) {}

  getRecipes() {
    return this.recipes.slice();
  }

  addIngredientsToSL(ingredients: Ingredient[]) {
    this.sLService.addIngredients(ingredients)
  }
}
