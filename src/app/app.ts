
import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './layout/header/header';
import { Footer } from './layout/footer/footer';
import { Hero } from './pages/home/sections/hero/hero';
import { About } from './pages/home/sections/about/about';
import { ActionLines } from './pages/home/sections/action-lines/action-lines';
import { Projects } from './pages/home/sections/projects/projects';
import { Contact } from './pages/home/sections/contact/contact';
import { Identity } from './pages/home/sections/identity/identity';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Footer, Hero, About, ActionLines, Projects, Contact, Identity],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = signal('asoagropescam');
}
