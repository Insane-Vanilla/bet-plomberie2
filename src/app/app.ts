import { Component, signal, AfterViewInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './header/header';
import { Footer } from './footer/footer';
import { Hero } from './hero/hero';
import { Services } from './services/services';
import { Procedure } from './procedure/procedure';
import { About } from './about/about';
import { Contact } from './contact/contact';
import { Secteur } from './secteur/secteur';
import { isPlatformBrowser } from '@angular/common';
import { Inject, PLATFORM_ID } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Header, Footer, Hero, Services, About, Procedure, Contact, Secteur],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App implements AfterViewInit {
  protected readonly title = signal('bet-plomberie');
  observer!: IntersectionObserver;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            console.log(entry.target);
            entry.target.classList.add('show');
          } else {
            entry.target.classList.remove('show');
          }
        });
      }, {});

      const blockElements = document.querySelectorAll('.block');
      blockElements.forEach((el) => this.observer.observe(el));
    }
  }
}
