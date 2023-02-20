import { Recipe } from '../recipe-book.model';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html'
})
export class RecipeListComponent implements OnInit {
  @Output() selectedRecipe = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
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

  firstName: string = 'Periquito pin pin'

  constructor() {}

  onSelectedRecipe(recipeDetails: Recipe) {
    this.selectedRecipe.emit(recipeDetails)
  }
  ngOnInit(): void {}
}
