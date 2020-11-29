import { EventEmitter } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

export class ShoppingListService {
    updatingIngredients = new EventEmitter<Ingredient[]>()

  private ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10),
  ];

  getIngredients() {
      return this.ingredients.slice()
  }

  addIngredient(ingredientData: Ingredient) {
    this.ingredients.push(ingredientData);
    this.updatingIngredients.emit(this.ingredients.slice());
  }

  fromShoppingList(ingredients: Ingredient[]) {
    this.ingredients.push(...ingredients);
    this.updatingIngredients.emit(this.ingredients.slice());
  }
}
