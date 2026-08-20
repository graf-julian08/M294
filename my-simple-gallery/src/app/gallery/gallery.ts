import { Component } from '@angular/core';
import { Subgallery } from "../subgallery/subgallery";

@Component({
  selector: 'app-gallery',
  imports: [Subgallery],
  templateUrl: './gallery.html',
  styleUrl: './gallery.css',
})
export class Gallery {

}