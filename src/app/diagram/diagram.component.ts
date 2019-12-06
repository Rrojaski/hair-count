import { Component, OnInit } from "@angular/core";
import { Cart } from "../core/models/interfaces";
import { CartService } from "../core/services/cart.service";
import { TouchSequence } from "selenium-webdriver";
@Component({
  selector: "app-diagram",
  templateUrl: "./diagram.component.html",
  styleUrls: ["./diagram.component.css"]
})
export class DiagramComponent implements OnInit {
  orders: Cart[];
  constructor(private cartService: CartService) {}

  ngOnInit() {
    this.cartService.getOrders().subscribe(orders => {
      this.orders = orders;
      console.log("recived orders: ", orders);
    });
  }
}
