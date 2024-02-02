import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatDividerModule } from '@angular/material/divider'
import { MatIconModule } from '@angular/material/icon';
import { filters } from '../../../data';

@Component({
  selector: 'products',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatMenuModule, MatDividerModule, MatIconModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent implements OnInit {
  filterData: any




  ngOnInit(){
    this.filterData = filters
  }

  }
