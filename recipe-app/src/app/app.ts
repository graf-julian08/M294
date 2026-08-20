import { Component, signal } from '@angular/core';
import { Header } from './header/header';
import { Recipes, RecipesComponent } from "./recipes/recipes";
import { ShoppingList } from "./shopping-list/shopping-list";

@Component({
  selector: 'app-root',
  imports: [Header, RecipesComponent, ShoppingList],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('recipe-app');
}
