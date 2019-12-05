import { Injectable } from "@angular/core";
import { AngularFirestore } from "@angular/fire/firestore";

interface Basket {
  count: number;
  name: string;
  description: string;
  image: string;
  price: number;
}

@Injectable()
export class CartService {
  basketItems: Basket[] = [];

  constructor(private db: AngularFirestore) {}

  addToCart(product) {
    // if product is already in the basket
    // FIX ME basket should mutate and not the product
    for (let i = 0; i < this.basketItems.length; i++) {
      if (product === this.basketItems[i]) {
        let originalPrice =
          this.basketItems[i].price / this.basketItems[i].count;
        this.basketItems[i].count = this.basketItems[i].count + 1;
        this.basketItems[i].price = this.basketItems[i].price + originalPrice;
        console.log("this should not mutate ===>", product, "but it does");
        return;
      }
    }

    this.basketItems.push(product);
  }

  removeFromCart(index) {
    this.basketItems.splice(index, 1);
  }

  getItems() {
    return this.basketItems.slice(0);
  }

  clearCart() {
    this.basketItems = [];
    return this.basketItems;
  }
}
