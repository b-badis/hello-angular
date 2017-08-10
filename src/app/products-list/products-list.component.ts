import { Component, OnInit } from '@angular/core';
import { IProduit } from "../models/iproduit";
import { ProductService } from "../services/product.service";

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {
  pageTitle: string = 'Product List';
  showImage: boolean = true;
  listFilter: string = '';
  produits: IProduit[];
  constructor(private _service: ProductService) {
  }

  ngOnInit() {
    this._service.getProducts().subscribe(p =>this.produits =p);
  }
  // Methodes
  supprimer(produit: IProduit): void {
    this.produits.splice(this.produits.indexOf(produit), 1)
  }
  toggleImage(): void {
    this.showImage = !this.showImage;
  }

  onRatingClicked(message: string): void {
    this.pageTitle = 'Product List: ' + message;
  }

}
