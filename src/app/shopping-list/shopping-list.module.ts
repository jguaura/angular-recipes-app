import { ShoppingListComponent } from './shopping-list.component';
import { ShoppingListEditComponent } from './shopping-list-edit/shopping-list-edit.component';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [ShoppingListComponent, ShoppingListEditComponent],
  exports: [ShoppingListComponent, ShoppingListEditComponent]
})

export class ShoppingListModule {}