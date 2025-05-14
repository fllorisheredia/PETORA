import { ChangeDetectionStrategy, Component, Renderer2, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'header-component',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './header-component.component.html',
  changeDetection: ChangeDetectionStrategy.Default, // importante para que Angular detecte el cambio
})
export class HeaderComponentComponent implements OnInit {
  currentTheme: 'light' | 'dark' = 'light';

  constructor(private renderer: Renderer2) {}

  ngOnInit(): void {
    const savedTheme = localStorage.getItem('theme') as 'light' | 'dark';
    this.currentTheme = savedTheme || 'light';
    this.renderer.setAttribute(document.documentElement, 'data-theme', this.currentTheme);
  }

  toggleTheme(): void {
    this.currentTheme = this.currentTheme === 'light' ? 'dark' : 'light';
    this.renderer.setAttribute(document.documentElement, 'data-theme', this.currentTheme);
    localStorage.setItem('theme', this.currentTheme);
  }
}
