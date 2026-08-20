import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [FormsModule, CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  inputText = '';
  response = '';
  loading = false;

  constructor(private http: HttpClient) { }

  sendText() {
    if (!this.inputText.trim()) {
      return;
    }

    this.loading = true;
    this.response = '';

    const prompt = `Analysiere den folgenden Text und identifiziere Stellen, die typisch für KI-generierten Text sind. 
Markiere diese Stellen mit ** ** und gib danach konkrete Tipps, wie man den Text natürlicher und menschlicher formulieren kann.

Text: "${this.inputText}"

Antworte auf Deutsch mit:
1. Der Text mit markierten generischen Stellen
2. Tipps für jeden markierten Bereich`;

    this.http.post<any>('http://localhost:11434/api/generate', {
      model: 'gemma3:4b',
      prompt: prompt,
      stream: false
    }).subscribe({
      next: (data) => {
        this.response = data.response;
        this.loading = false;
      },
      error: (err) => {
        this.response = 'Fehler: ' + err.message;
        this.loading = false;
      }
    });
  }
}
