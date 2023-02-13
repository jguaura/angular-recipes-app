import { Component } from "@angular/core";

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html'
})

export class RecipeDetailComponent {
  onClickBtn() {
    console.info('click')
  }
}