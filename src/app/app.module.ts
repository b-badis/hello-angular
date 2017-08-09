import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ProductsListComponent } from './products-list/products-list.component';
import { ProductFilterPipe } from './pipes/product-filter.pipe';
import { StarComponent } from "./shared/star/star.component";

@NgModule({
  declarations: [
    AppComponent,
    ProductsListComponent,ProductFilterPipe,StarComponent
  ],
  imports: [
    BrowserModule,FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
