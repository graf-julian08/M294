import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Recipes } from '../recipes'; 
import { RecipeItem } from "./recipe-item/recipe-item"; 

@Component({
  selector: 'app-recipe-list',
  imports: [RecipeItem, CommonModule], 
  templateUrl: './recipe-list.html',
  styleUrl: './recipe-list.css',
  standalone: true
})
export class RecipeListComponent implements OnInit {
  recipes: Recipes[] = [ 
    new Recipes('A Test Recipe', 'This is simply a test', 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400')
  ];

  constructor() {
    
   }

  ngOnInit(): void {
  }
}