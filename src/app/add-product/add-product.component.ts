import { Component, OnInit } from "@angular/core";
import { products } from "../products";
import { CartService } from "../core/services/cart.service";
import { Cart } from "../core/models/interfaces";

@Component({
  selector: "app-add-product",
  templateUrl: "./add-product.component.html",
  styleUrls: ["./add-product.component.css"]
})
export class AddProductComponent implements OnInit {
  // Array of products to be displayed on screen for the user to add to the basket
  products: object[] = products;

  // The basket is an array of items that were added by the user when they click the add button for that product
  cart: Cart[];
  total: number;
  constructor(private cartService: CartService) {}

  addToCart(item) {
    this.cartService.addToCart(item);
    this.cart = this.cartService.getCart;
    this.total = this.cartService.getTotal;
  }

  removeFromCart(index) {
    this.cartService.removeFromCart(index);
    this.cart = this.cartService.getCart;
    this.total = this.cartService.getTotal;
  }

  createOrder() {
    this.cartService.createOrder();
    this.cart = this.cartService.getCart;
    this.total = this.cartService.getTotal;
  }

  ngOnInit() {
    this.cart = this.cartService.getCart;
  }
}
