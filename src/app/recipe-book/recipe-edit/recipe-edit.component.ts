import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html'
})
export class RecipeEditComponent implements OnInit {
  id: number;
  isEditing: boolean = false;
  constructor(private route: ActivatedRoute) {}
  ngOnInit(): void {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = +params['id']
          this.isEditing = params['id'] !== null;
        }
      )
  }
}
