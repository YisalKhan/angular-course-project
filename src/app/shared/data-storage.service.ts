import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { RecipeService } from '../recipe-book/recipe.service';
import { RecipeBook } from '../recipe-book/recipe-book.model';
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class DataStorageService {

  constructor(
    private recipeService: RecipeService,
    private http: Http,
    private authService: AuthService) { }

  storeRecipe() {
    const token = this.authService.getToken();
    return this.http.put('https://course-project-recipe-book.firebaseio.com/recipes.json?auth=' + token, this.recipeService.getRecipes());
  }

  fetchRecipe() {
    const token = this.authService.getToken();
    this.http.get('https://course-project-recipe-book.firebaseio.com/recipes.json?auth=' + token)
      .map(
        (response: Response) => {
          const recipes : RecipeBook[] = response.json();
          for(let recipe of recipes) {
            if(!recipe['ingredients']) {
              recipe['ingredients'] = [];
            }
          }
          return recipes;
        }
      )
      .subscribe(
        (recipes: RecipeBook[]) => {
          this.recipeService.setRecipes(recipes);
        }
      );
  }
}
