import { Component, OnInit, OnDestroy } from '@angular/core';
import { RecipeBook } from '../recipe-book.model';
import { RecipeService } from '../recipe.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit, OnDestroy {
  recipes: RecipeBook[];
  subscription : Subscription;
  constructor( private recipeService: RecipeService,
                private route: ActivatedRoute,
                private router: Router) { }

  ngOnInit() {
    this.subscription = this.recipeService.recipeChanged.subscribe(
      (recipes : RecipeBook[]) => {
        this.recipes = recipes;
      }
    );
    this.recipes=this.recipeService.getRecipes();
  }

  onNewRecipe() {
    this.router.navigate(['new'], {relativeTo: this.route});
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
