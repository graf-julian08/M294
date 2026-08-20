import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-greeting',
  imports: [FormsModule],
  templateUrl: './greeting.html',
  styleUrl: './greeting.css',
})
export class Greeting {
  name: string = 'Julian';
  name2: string = this.name;
  
  changeName() { 
    this.name = this.name2;
  }

  resetName() { 
    this.name = 'Julian';
  }
}
