export class ItemDTO {

  id: number;

  img: string;

  title: string;

  brand: string;

  price: number;

  sizes: string[];

  colors: string[];

  constructor(id: number, img: string, title: string, brand:string, price:number, sizes:string[], colors:string[]){
    this.id = id;
    this.img = img;
    this.title = title;
    this.brand = brand;
    this.price = price
    this.sizes = sizes;
    this.colors = colors;
  }
}