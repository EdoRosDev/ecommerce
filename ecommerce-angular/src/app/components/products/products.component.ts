import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatDividerModule } from '@angular/material/divider'
import { MatIconModule } from '@angular/material/icon';
import {MatCheckboxModule} from '@angular/material/checkbox'
import { filters } from '../../../data';
import { ProductCardComponent } from '../product-card/product-card.component';
import { ProductService } from '../../module/services/product.service';

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
  listOfProducts!: any[]
  showFilter: boolean = false
  activatedFilter: {
    sectionId: string
    value: string
  }[] = []

  constructor(productService: ProductService){
    this.listOfProducts = productService.getAllProducts();
  }

  ngOnInit(){
    this.filterData = filters
  }

  showFilters(){
    let filters_form = document.getElementById("filters_form");
    filters_form?.classList.contains("hidden") ? filters_form?.classList.remove("hidden") : filters_form?.classList.add("hidden")
  }

  handleMultipleFilters(value:string, sectionId:string, event: any){
    event.checked ? this.activatedFilter.push({sectionId, value}) :
    this.activatedFilter.splice(this.activatedFilter.indexOf({sectionId, value}), 1)  
  }


  }
