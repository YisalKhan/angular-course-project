import { Component, OnInit } from '@angular/core';
import { RecipeBook } from './recipe-book.model';
import { RecipeService } from './recipe.service';

@Component({
  selector: 'app-recipe-book',
  templateUrl: './recipe-book.component.html',
  styleUrls: ['./recipe-book.component.css']
})
export class RecipeBookComponent implements OnInit {

  selectedRecipe:RecipeBook;
  constructor( private recipeService: RecipeService) { }

  ngOnInit() {
    this.recipeService.recipeSelected.subscribe (
      (recipe : RecipeBook) => {
        this.selectedRecipe = recipe;
      }
    );
  }
}