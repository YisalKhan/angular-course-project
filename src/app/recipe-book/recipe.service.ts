import { Injectable, EventEmitter } from '@angular/core';
import { RecipeBook } from './recipe-book.model';
import { Ingredient } from '../shared/ingredient.module';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  recipeSelected = new EventEmitter<RecipeBook>();

  recipes: RecipeBook[]=[
    new RecipeBook(
      'Recipe Name', 
      'Recipe Description',
      'https://media3.s-nbcnews.com/j/MSNBC/Components/Video/201808/tdy_food_klg_chicken_180828_1920x1080.today-inline-vid-featured-desktop.jpg',
      [
        new Ingredient('Meat', '1'),
        new Ingredient('Frech Fries', '20')
      ]),
    new RecipeBook(
      'Pizza', 
      'Recipe of Pizza',
      'https://d2gk7xgygi98cy.cloudfront.net/20-4-facebook.jpg',
      [
        new Ingredient('Buns', '2'),
        new Ingredient('Meat', '1')
      ])
  ];
  constructor( private slService : ShoppingListService ) { }

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(index : number) {
    return this.recipes[index];
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]){
    this.slService.addIngredients(ingredients);
  }

}
