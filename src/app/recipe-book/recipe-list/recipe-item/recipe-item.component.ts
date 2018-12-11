import { Component, OnInit, Input } from '@angular/core';
import { RecipeBook } from '../../recipe-book.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {

  @Input() recipe: RecipeBook;
  @Input() index: number;

  ngOnInit() {
  }

}
