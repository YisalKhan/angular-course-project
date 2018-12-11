import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.module';
import { ShoppingListService } from './shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  ingredient: Ingredient[];
  constructor( private slService : ShoppingListService) { }

  ngOnInit() {
   this.ingredient = this.slService.getIngredient();
   this.slService.ingredientsChanged.subscribe(
     (ingredients : Ingredient[]) => {
       this.ingredient = ingredients;
     }
   );
  }

}
