import { Component, EventEmitter, OnDestroy, OnInit, Output, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
  @ViewChild('f', {static: false}) ingForm: NgForm;
  @Output() addingIngredint = new EventEmitter<Ingredient>();

  subscription: Subscription;
  indexOfEditItem: number;
  editedItem: Ingredient;
  editMode = false;

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit(): void {
    this.subscription = this.shoppingListService.getIndexOfIngredient.subscribe(
      (index: number) => {
        this.indexOfEditItem = index;
        this.editedItem = this.shoppingListService.getCurrentIngredient(index);
        this.editMode = true;
        this.ingForm.setValue({
          name: this.editedItem.name,
          amount: this.editedItem.amount
        })
      }
    )
  }

  onAddIngredient(form: NgForm) {
    const value = form.value;
    const newIngredient: Ingredient = new Ingredient(value.name, value.amount)
    if (this.editMode) {
      this.shoppingListService.updateCurrentIngredient(this.indexOfEditItem, newIngredient)
    } else {
      this.shoppingListService.addIngredient(newIngredient)
    }
    this.resetForm(form);
  }

  resetForm(form: NgForm) {
    form.reset();
    this.editMode = false;
    this.indexOfEditItem = undefined;
  }

  onClear() {
    this.resetForm(this.ingForm);
  }

  onDelete() {
    this.shoppingListService.deleteIng(this.indexOfEditItem);
    this.resetForm(this.ingForm);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
