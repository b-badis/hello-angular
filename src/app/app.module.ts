import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ProductsListComponent } from './products-list/products-list.component';
import { ProductFilterPipe } from './pipes/product-filter.pipe';
import { StarComponent } from "./shared/star/star.component";
import { ProductAddComponent } from './products-add/product-add.component';
import { HttpModule } from "@angular/http";

@NgModule({
  declarations: [
    AppComponent,
    ProductsListComponent,ProductFilterPipe,StarComponent,ProductAddComponent
  ],
  imports: [
    BrowserModule,FormsModule, HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
