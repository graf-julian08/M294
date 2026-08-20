import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Server } from './server/server'; 
import { Sizer } from './sizer/sizer';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Server, Sizer, FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('data-binding');
  fontSizePx: any;
  
  servers = ['Testserver1', 'Testserver2', 'Testserver3'];

  onAddServer() {
    this.servers.push('New Server');
  }
}