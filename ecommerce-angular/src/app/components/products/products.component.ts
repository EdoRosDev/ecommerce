import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatDividerModule } from '@angular/material/divider'
import { MatIconModule } from '@angular/material/icon';
import {MatCheckboxModule} from '@angular/material/checkbox'
import { filters } from '../../../data';
import { ProductCardComponent } from '../product-card/product-card.component';
import { ItemService } from '../../services/item/item.service';

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
  products: any
  showFilter: boolean = false
  activatedFilterColor:string[] = []
  activatedFilterSize:string[] = []

  constructor(private itemService: ItemService){
    this.itemService.productsChange.subscribe(data => {
      this.products = data
    })
  }

  ngOnInit(){
    this.filterData = filters
  }

  showFilters(){
    let filters_form = document.getElementById("filters_form");
    filters_form?.classList.contains("hidden") ? filters_form?.classList.remove("hidden") : filters_form?.classList.add("hidden")
  }

  handleMultipleFilters(value:string, sectionId:string, event: any){
    if(sectionId == 'color'){
      event.checked ? this.activatedFilterColor.push(value.toLowerCase()) :
      this.activatedFilterColor.splice(this.activatedFilterColor.indexOf(value, 1))
    } else {
      event.checked ? this.activatedFilterSize.push(value.toUpperCase()) :
      this.activatedFilterSize.splice(this.activatedFilterSize.indexOf(value, 1))
    }
    this.itemService.selectBySizesAndColors(this.activatedFilterSize, this.activatedFilterColor).subscribe(data => {
      this.products = data
    });
    
  }


  }
