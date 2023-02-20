import { Recipe } from './../recipe-book.model';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html'
})
export class RecipeItemComponent implements OnInit {
  @Input() recipe: Recipe;
  @Output() selectedRecipe = new EventEmitter<Recipe>();
  constructor() {
  }
  onEmitRecipe() {
    this.selectedRecipe.emit(this.recipe);
  }
  ngOnInit(): void {}
}
