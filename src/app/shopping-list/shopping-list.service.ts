import { Subject } from 'rxjs';
import { Ingredient } from '../shared/ingredient.model';

export class ShoppingListService {
    updatingIngredients = new Subject<Ingredient[]>()
    getIndexOfIngredient = new Subject<number>();

  private ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10),
  ];

  getIngredients() {
      return this.ingredients.slice()
  }

  getCurrentIngredient(index: number) {
    return this.ingredients[index];
  }

  addIngredient(ingredientData: Ingredient) {
    this.ingredients.push(ingredientData);
    this.updatingIngredients.next(this.ingredients.slice());
  }

  updateCurrentIngredient(index: number, newIng: Ingredient) {
    this.ingredients[index] = newIng;
    this.updatingIngredients.next(this.ingredients.slice());
  }

  deleteIng(index: number) {
    this.ingredients.splice(index, 1);
    this.updatingIngredients.next(this.ingredients);
  }

  fromShoppingList(ingredients: Ingredient[]) {
    this.ingredients.push(...ingredients);
    this.updatingIngredients.next(this.ingredients.slice());
  }
}
