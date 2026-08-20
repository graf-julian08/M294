import { Component } from '@angular/core';
import { RecipeDetail } from './recipe-detail/recipe-detail'; 
import { RecipeListComponent } from './recipe-list/recipe-list';

@Component({
  selector: 'app-recipes',
  imports: [RecipeListComponent, RecipeDetail], 
  templateUrl: './recipes.html',
  styleUrl: './recipes.css',
  standalone: true
})
export class RecipesComponent {
  constructor() { } 
}


export class Recipes {
  public name: string;
  public description: string;
  public imagePath: string;

  constructor(name: string, desc: string, imagePath: string) {
    this.name = name;
    this.description = desc;
    this.imagePath = imagePath;
  }
}
