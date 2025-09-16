import { Component } from '@angular/core';
import { SimpleCard } from '../simple-card/simple-card';

@Component({
  selector: 'app-services',
  imports: [SimpleCard],
  templateUrl: './services.html',
  styleUrl: './services.css',
})
export class Services {}
