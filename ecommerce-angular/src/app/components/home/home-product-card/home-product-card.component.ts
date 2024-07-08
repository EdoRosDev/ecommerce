import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'home-product-card',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './home-product-card.component.html',
  styleUrl: './home-product-card.component.scss'
})
export class HomeProductCardComponent {

  @Input() product:any
}
