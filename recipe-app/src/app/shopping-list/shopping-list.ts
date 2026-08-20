import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShoppingEdit } from "./shopping-edit/shopping-edit";
import { Ingredient } from '../shared/ingredient';

@Component({
  selector: 'app-shopping-list',
  standalone: true,
  imports: [CommonModule, ShoppingEdit],
  templateUrl: './shopping-list.html',
  styleUrls: ['./shopping-list.css'],
})
export class ShoppingList implements OnInit {
  ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10)
  ];

  constructor() { }

  ngOnInit(): void { }
}