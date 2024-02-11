import { Product } from "../product/product";

// export class Cart{

//     cartItems: Item[] = []

//     constructor(){
//         this.cartItems = []
//     }

//     addToCart(p:Product){
//        let itemIsInCart = this.cartItems.find((item => item.id == p.id))
//        if(itemIsInCart) itemIsInCart.quantity++
//        else this.cartItems.push(new Item(p))
//     }

//     getTotalPrice() : number{
//         let sum = 0
//         this.cartItems.forEach(item => {
//             sum += item.price*item.quantity    
//         });
//         return sum;
//     }

//     removeFromCart(i:Item){
//         this.cartItems.splice(this.cartItems.indexOf(i, 1))
//     }
// }