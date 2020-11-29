import { Recipe } from './../recipe.model';
import { Component, Input, OnInit } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from 'src/app/shopping-list/shopping-list.service';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.css']
})
export class RecipeDetailsComponent implements OnInit {
  @Input() recipeSelected: Recipe;
  constructor(private slService: ShoppingListService) {
    console.log(this.recipeSelected);
  }

  ngOnInit() {
  }

  sendToShoppingList (ingredientsData: Ingredient[]) {
    this.slService.fromShoppingList(ingredientsData);
  }

}
