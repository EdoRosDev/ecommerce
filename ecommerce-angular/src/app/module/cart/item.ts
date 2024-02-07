import { Product } from "../product/product";

export class Item implements Omit<Product, 'size'>   {
    id: number;
    imageUrl: string;
    brand: string;
    title: string;
    color: string;
    price: number;
    
    selectedSize: string
    quantity: number;

    constructor(p:Product, size: string){
        this.id=p.id
        this.imageUrl = p.imageUrl
        this.brand = p.brand
        this.title = p.title
        this.color = p.color
        this.price = p.price
        this.selectedSize = size
        this.quantity = 1
    }

}