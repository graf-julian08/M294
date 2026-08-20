import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Gallery } from "./gallery/gallery";
import { BiggerGallery } from "./bigger-gallery/bigger-gallery";
import { ImageMrPotato } from "./image-mr-potato/image-mr-potato";
import { Subgallery } from "./subgallery/subgallery";

@Component({
  selector: 'app-root',
  imports: [Subgallery],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('my-simple-gallery');
}
