import { RecipeBookService } from './../recipe-book.service';
import { Recipe } from './../recipe-book.model';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html'
})
export class RecipeItemComponent implements OnInit {
  @Input() recipe: Recipe;

  constructor(private recipeBookService: RecipeBookService) {}

  onSelect() {
    this.recipeBookService.recipeSelected.emit(this.recipe);
  }

  ngOnInit(): void {}
}
