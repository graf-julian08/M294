import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Formular } from "./formular/formular";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Formular],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('formular-app');
}
