import { Product } from "../product/product";


export class Item implements Omit<Product, 'size' |'color'>   {
    id: number;
    img: string;
    brand: string;
    title: string;
    selectedColor: string;
    price: number;
    selectedSize: string;
    quantity: number;

    constructor(p:Product, size: string, color: string){
        this.id=p.id
        this.img = p.img
        this.brand = p.brand
        this.title = p.title
        this.selectedColor = color
        this.price = p.price
        this.selectedSize = size
        this.quantity = 1
    }

}