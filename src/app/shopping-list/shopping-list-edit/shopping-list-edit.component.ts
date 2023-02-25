import { Ingredient } from './../../shared/ingredient.model';
import { Component, ElementRef, ViewChild, OnInit } from '@angular/core';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html'
})
export class ShoppingListEditComponent implements OnInit {
  @ViewChild('nameInput', { static: false }) nameInput: ElementRef;
  @ViewChild('amountInput', { static: false }) amountInput: ElementRef;
  ingredient: Ingredient;
  constructor(private shoppingListService: ShoppingListService) {}
  ngOnInit(): void {}
  onAddIngredients() {
    let name = this.nameInput.nativeElement.value;
    let amount = this.amountInput.nativeElement.value;
    this.ingredient = { name, amount }
    this.shoppingListService.addIngredient(new Ingredient(name, amount));
    name = null;
    amount = null;
  }
}
