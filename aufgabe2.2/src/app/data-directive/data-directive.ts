import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-data-directive',
  imports: [CommonModule, FormsModule],
  templateUrl: './data-directive.html',
  styleUrl: './data-directive.css',
})
export class DataDirective {
  visiblePasswd: string = "tuna"
  passwdLength = this.visiblePasswd.length;
  passwd: string = "*".repeat(this.passwdLength);
  logArray: string[] = [];

  visible() {
    this.passwd = this.visiblePasswd;
    this.logArray.push("Passwort wurde angezeigt");;
  }

  hidden() {
    this.passwd = "*".repeat(this.passwdLength);
    this.logArray.push("Passwort wurde versteckt");
  }
}
