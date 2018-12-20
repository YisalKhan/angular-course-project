import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';

import { Ingredient } from 'src/app/shared/ingredient.module';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {

  @ViewChild('f') slForm: NgForm;
  subscription: Subscription;
  editMode= false;
  editedItemIndex:number;
  editIngredient : Ingredient;
  constructor( private slService: ShoppingListService ) { }

  ngOnInit() {
    this.subscription = this.slService.startedEditing.subscribe(
      (index : number) => {
        this.editMode = true;
        this.editedItemIndex = index;
        this.editIngredient = this.slService.editIngredient(index);
        this.slForm.setValue({
          name : this.editIngredient.name,
          amount : this.editIngredient.amount
        });
      }
    );
  }

  onAddItem(form : NgForm) {
    const value = form.value;
    const newIngrdient = new Ingredient(value.name, value.amount);
    if(this.editMode) {
      this.slService.updateIngredient(this.editedItemIndex, newIngrdient);
      this.editMode = false;
    }
    else {
      this.slService.addIngredient(newIngrdient);
    }
    form.reset();
  }

  onClearForm() {
    this.slForm.reset();
    this.editMode = false;
  }

  onDelete() {
    this.slService.deleteIngredient(this.editedItemIndex);
    this.onClearForm();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
