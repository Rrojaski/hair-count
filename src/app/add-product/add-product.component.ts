import { Component, OnInit } from "@angular/core";
import { products } from "../products";
import { CartService } from "../cart.service";

interface Basket {
  count: number;
  name: string;
  description: string;
  image: string;
  price: number;
}

@Component({
  selector: "app-add-product",
  templateUrl: "./add-product.component.html",
  styleUrls: ["./add-product.component.css"]
})
export class AddProductComponent implements OnInit {
  // Array of products to be displayed on screen for the user to add to the basket
  products: object[] = products;

  // The basket is an array of items that were added by the user when they click the add button for that product
  basket: Basket[];
  total: number;
  constructor(private cartService: CartService) {}

  addToCart(item) {
    this.cartService.addToCart(item);
    this.basket = this.cartService.getItems();
    this.total = this.basket.reduce((total, item) => total + item.price, 0);
  }

  removeFromCart(index) {
    this.cartService.removeFromCart(index);
    this.basket = this.cartService.getItems();
    this.total = this.basket.reduce((total, item) => total + item.price, 0);
  }

  ngOnInit() {
    this.basket = this.cartService.getItems();
  }
}
