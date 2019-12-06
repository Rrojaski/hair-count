import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";

@Component({
  selector: "app-top-bar",
  templateUrl: "./top-bar.component.html",
  styleUrls: ["./top-bar.component.css"]
})
export class TopBarComponent implements OnInit {
  constructor() {}
  ngOnInit() {}

  // @ViewChild("navbarToggler") navbarTogglerRef: ElementRef;

  // ToggleNavBar() {
  //   console.log("navbarTogglerRef: ", this.navbarTogglerRef);
  //   if (this.navbarTogglerRef.getAttribute("aria-expanded") == "true") {
  //     this.navbarTogglerRef.setAttribute("aria-expanded", false);
  //   }
  // }
}

// $(document).on("click", ".navbar-collapse.in", function(e) {
//   if ($(e.target).is("a")) {
//     $(this).collapse("hide");
//   }
// });
