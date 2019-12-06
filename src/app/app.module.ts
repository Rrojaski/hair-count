import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { environment } from "../environments/environment";

// Firebase
import { AngularFireModule } from "@angular/fire";
import { AngularFireStorageModule } from "@angular/fire/storage";
import { AngularFirestore } from "@angular/fire/firestore";

// HTTP Requests
import { HttpClientModule } from "@angular/common/http";

// Routing
import { RouterModule } from "@angular/router";

// Custom Components
import { HelloComponent } from "./hello.component";
import { TopBarComponent } from "./top-bar/top-bar.component";
import { PostsJsonService } from "./posts-json.service";
import { HomeComponent } from "./home/home.component";
import { BlogComponent } from "./blog/blog.component";
import { BlogPostComponent } from "./blog-post/blog-post.component";
import { SignInComponent } from "./sign-in/sign-in.component";
import { SignUpComponent } from "./sign-up/sign-up.component";
import { ForgotAuthComponent } from "./forgot-auth/forgot-auth.component";
import { ContactComponent } from "./contact/contact.component";
import { PricingComponent } from "./pricing/pricing.component";
import { FooterComponent } from "./footer/footer.component";
import { DemoComponent } from "./demo/demo.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { DiagramComponent } from "./diagram/diagram.component";
import { ProductDetailsComponent } from "./product-details/product-details.component";
import { AddProductComponent } from "./add-product/add-product.component";
import { CartService } from "./core//services/cart.service";

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireStorageModule,
    RouterModule.forRoot([
      { path: "", component: HomeComponent },
      { path: "blog", component: BlogComponent },
      { path: "sign-in", component: SignInComponent },
      { path: "sign-up", component: SignUpComponent },
      { path: "forgot-auth", component: ForgotAuthComponent },
      { path: "pricing", component: PricingComponent },
      { path: "contact", component: ContactComponent },
      { path: "demo", component: DemoComponent },
      {
        path: "dashboard",
        component: DashboardComponent,
        children: [
          { path: "", component: DiagramComponent },
          { path: "add-product", component: AddProductComponent },
          { path: "product/:productId", component: ProductDetailsComponent }
        ]
      }
    ])
  ],
  declarations: [
    AppComponent,
    HelloComponent,
    TopBarComponent,
    HomeComponent,
    BlogComponent,
    BlogPostComponent,
    SignInComponent,
    SignUpComponent,
    ForgotAuthComponent,
    ContactComponent,
    PricingComponent,
    FooterComponent,
    DemoComponent,
    DashboardComponent,
    DiagramComponent,
    ProductDetailsComponent,
    AddProductComponent
  ],
  bootstrap: [AppComponent],
  providers: [PostsJsonService, CartService, AngularFirestore]
})
export class AppModule {}
