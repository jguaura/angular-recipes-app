import { BrowserModule } from '@angular/platform-browser';
import { ShoppingListComponent } from './shopping-list.component';
import { ShoppingListEditComponent } from './shopping-list-edit/shopping-list-edit.component';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [ShoppingListComponent, ShoppingListEditComponent],
  exports: [ShoppingListComponent, ShoppingListEditComponent],
  imports: [BrowserModule, FormsModule]
})

export class ShoppingListModule {}