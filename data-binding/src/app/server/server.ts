import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-server',
  imports: [CommonModule],
  templateUrl: './server.html',
  styleUrl: './server.css',
})
export class Server {
  serverId: number = 10;
  serverStatus: string = 'offline';
  serverCreationStatus: string = 'No server was created!';
  serverCreated: boolean = false;
  serverName: string = 'Testserver';

  allowNewServer: boolean = false;

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  getServerStatus() {
    return this.serverStatus;
  }

  getColor() {
    return this.serverStatus === 'online' ? 'green' : 'red';
  }

  onCreateServer() {
    this.serverCreationStatus = 'Server was created!';
    this.serverCreated = true;
  }
}