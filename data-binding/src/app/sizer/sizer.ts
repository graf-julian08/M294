import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-sizer',
  imports: [],
  templateUrl: './sizer.html',
  styleUrl: './sizer.css',
})
export class Sizer {
  @Input() size: number | string = 16;
  
  @Output() sizeChange = new EventEmitter<number>();

  dec() {
    this.size = +this.size - 1;
    this.sizeChange.emit(this.size);
  }

  inc() {
    this.size = +this.size + 1;
    this.sizeChange.emit(this.size);
  }
}
