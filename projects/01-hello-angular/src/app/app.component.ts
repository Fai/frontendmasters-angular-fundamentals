import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  template: `
    <h1>If you are reading this...</h1>
    <p>Things have worked out well! 🎉</p>
    <ol>
      <li>My favorite book is <strong>Harry Potter</strong></li>
      <li>My favorite movie is <strong>My Devil Wears Prada</strong></li>
      <li>My favorite song is <strong>Big Mini World</strong></li>
    </ol>
  `,
  styles: `
  li {
    list-style-type: upper-roman;
  }
  `,
})
export class AppComponent {}
