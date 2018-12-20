import { Component, OnInit, OnDestroy } from '@angular/core';
import { Ingredient } from '../shared/ingredient.module';
import { ShoppingListService } from './shopping-list.service';
import { Subscription } from 'rxjs/Rx';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit, OnDestroy {

  ingredient: Ingredient[];
  private subscription: Subscription;
  constructor( private slService : ShoppingListService) { }

  ngOnInit() {
   this.ingredient = this.slService.getIngredient();
   this.subscription = this.slService.ingredientsChanged.subscribe(
     (ingredients : Ingredient[]) => {
       this.ingredient = ingredients;
     }
   );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  onEditItem(index : number) {
    this.slService.startedEditing.next(index);
  }

}
