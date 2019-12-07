import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import {
  AngularFirestore,
  AngularFirestoreCollection,
  AngularFirestoreDocument
} from "@angular/fire/firestore";

import { Cart } from "../models/interfaces";

@Injectable()
export class CartService {
  cart: Cart[] = [];
  total: number;
  ordersCollection: AngularFirestoreCollection<Cart>;
  orders: Observable<Cart[]>;
  constructor(private db: AngularFirestore) {
    this.orders = this.db.collection("orders").valueChanges();
  }

  addToCart(item) {
    for (let i = 0; i < this.cart.length; i++) {
      if (item.name === this.cart[i].name) {
        let originalProductPrice = this.cart[i].price / this.cart[i].count;
        this.cart[i].count = this.cart[i].count + 1;
        this.cart[i].price = this.cart[i].price + originalProductPrice;
        this.total = this.cart.reduce((total, item) => total + item.price, 0);
        return;
      }
    }
    this.cart.push(Object.assign({}, item));
    this.total = this.cart.reduce((total, item) => total + item.price, 0);
  }

  removeFromCart(index) {
    this.cart.splice(index, 1);
    this.total = this.cart.reduce((total, item) => total + item.price, 0);
  }

  get getCart() {
    return this.cart;
  }

  get getTotal() {
    return this.total;
  }

  getOrders() {
    return this.orders;
  }

  clearCart() {
    this.cart = [];
    this.total = null;
    return this.cart;
  }

  createOrder() {
    this.db.collection("orders").add({ items: this.cart, total: this.total });
    this.clearCart();
  }
}
