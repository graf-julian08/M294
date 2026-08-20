import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DataDirective } from "./data-directive/data-directive";
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [DataDirective, FormsModule, CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Aufgabe2.2');
}
