import { Subject } from 'rxjs';
import { Ingredient } from '../shared/ingredient.model';

export class ShoppingListService {
    updatingIngredients = new Subject<Ingredient[]>()

  private ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10),
  ];

  getIngredients() {
      return this.ingredients.slice()
  }

  addIngredient(ingredientData: Ingredient) {
    this.ingredients.push(ingredientData);
    this.updatingIngredients.next(this.ingredients.slice());
  }

  fromShoppingList(ingredients: Ingredient[]) {
    this.ingredients.push(...ingredients);
    this.updatingIngredients.next(this.ingredients.slice());
  }
}
