import { Subscription } from 'rxjs';
import { RecipeBookService } from './recipe-book.service';
import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { Recipe } from './recipe-book.model';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe-book.component.html'
})
export class RecipeComponent implements OnInit, OnDestroy {

  constructor() {}

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
  }
}
