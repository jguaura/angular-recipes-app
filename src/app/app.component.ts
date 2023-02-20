import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  showShoppingList: boolean = false;
  setView(view) {
    view === 'Shopping List' ? this.showShoppingList = true : this.showShoppingList = false
  }
}
