import { Component, OnInit } from "@angular/core";
import { products } from "../products";
import { CartService } from "../core/services/cart.service";
import { Cart } from "../core/models/interfaces";

@Component({
  selector: "app-add-product",
  templateUrl: "./add-product.component.html",
  styleUrls: ["./add-product.component.scss"]
})
export class AddProductComponent implements OnInit {
  products: object[] = products;
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
