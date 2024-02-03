import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatDividerModule } from '@angular/material/divider'
import { MatIconModule } from '@angular/material/icon';
import {MatCheckboxModule} from '@angular/material/checkbox'
import { filters, menShirt } from '../../../data';
import { ProductCardComponent } from '../product-card/product-card.component';

@Component({
  selector: 'products',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatMenuModule, MatDividerModule, MatIconModule, MatCheckboxModule, ProductCardComponent],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent implements OnInit {
  filterData: any
  sortMenu:any = ''
  menShirt: any;


  ngOnInit(){
    this.filterData = filters
    this.menShirt = menShirt
  }

  setFilter(){}


  }
