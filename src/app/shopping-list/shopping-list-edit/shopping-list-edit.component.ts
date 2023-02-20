import { Ingredient } from './../../shared/ingredient.model';
import {
  Component,
  ElementRef,
  ViewChild,
  OnInit,
  Output,
  EventEmitter
} from '@angular/core';

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html'
})
export class ShoppingListEditComponent implements OnInit {
  @ViewChild('nameInput', { static: false }) nameInput: ElementRef;
  @ViewChild('amountInput', { static: false }) amountInput: ElementRef;
  @Output('ingredient') ingredient = new EventEmitter<Ingredient>();
  constructor() {}
  ngOnInit(): void {}
  onAddIngredients() {
    let ingName = this.nameInput.nativeElement.value;
    let ingAmount = this.amountInput.nativeElement.value;
    this.ingredient.emit(new Ingredient(ingName, ingAmount));
    ingName = null;
    ingAmount = null;
  }
}
