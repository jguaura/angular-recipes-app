import { Recipe } from './../recipe-book.model';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html'
})
export class RecipeItemComponent implements OnInit {
  constructor() {}
  @Input() recipe: Recipe;
  ngOnInit(): void {}
}
