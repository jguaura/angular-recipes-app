import { ShoppingListModule } from './shopping-list/shopping-list.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RecipeBookModule } from './recipe-book/recipe-book.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [AppComponent],
  providers: [],
  bootstrap: [AppComponent],
  imports: [BrowserModule, HeaderComponent, RecipeBookModule, ShoppingListModule, BrowserAnimationsModule]
})
export class AppModule {}
