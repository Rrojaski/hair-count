import { Component, OnInit } from "@angular/core";
import { Cart } from "../core/models/interfaces";
import { CartService } from "../core/services/cart.service";

@Component({
  selector: "app-orders",
  templateUrl: "./orders.component.html",
  styleUrls: ["./orders.component.scss"]
})
export class OrdersComponent implements OnInit {
  orders: Cart[];
  constructor(private cartService: CartService) {}

  ngOnInit() {
    this.cartService.getOrders().subscribe(orders => {
      this.orders = orders;
      console.log("this.orders: ", this.orders);
    });
  }
}
