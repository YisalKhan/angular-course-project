import { Injectable } from '@angular/core';
import { RecipeBook } from './recipe-book.model';
import { Ingredient } from '../shared/ingredient.module';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  recipeChanged = new Subject<RecipeBook[]>();  

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

  setRecipes(recipes : RecipeBook[]) {
    this.recipes = recipes;
    this.recipeChanged.next(this.recipes.slice());
  }

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(index : number) {
    return this.recipes[index];
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]){
    this.slService.addIngredients(ingredients);
  }

  addRecipe(recipe: RecipeBook) {
    this.recipes.push(recipe);
    this.recipeChanged.next(this.recipes.slice());
  }

  updateRecipe(index: number, newRecipe: RecipeBook) {
    this.recipes[index] = newRecipe;
    this.recipeChanged.next(this.recipes.slice());
  }

  deleteRecipe(index: number) {
    this.recipes.splice(index, 1);
    this.recipeChanged.next(this.recipes.slice());
  }
}
