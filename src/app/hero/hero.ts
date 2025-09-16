import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-hero',
  imports: [MatCardModule, MatButtonModule],
  templateUrl: './hero.html',
  styleUrl: './hero.css',
})
export class Hero {}
