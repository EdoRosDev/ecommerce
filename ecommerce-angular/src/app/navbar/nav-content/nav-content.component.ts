import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { navigation } from '../../../data/navbarContent';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'nav-content',
  standalone: true,
  imports: [CommonModule, MatButtonModule],
  templateUrl: './nav-content.component.html',
  styleUrl: './nav-content.component.scss'
})
export class NavContentComponent implements OnInit {
  
  category: any;
  @Input() selectedSection: any;
  
  ngOnInit(): void {
    this.category = navigation
  }

}
