import { Component } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-header',
  styleUrl: './header.scss',
  templateUrl: './header.html',
})


export class Header {
  menuAbierto = false;

  cerrarMenu(): void {
    this.menuAbierto = false;
  }

  alternarMenu(): void {
    this.menuAbierto = !this.menuAbierto;
  }
}
