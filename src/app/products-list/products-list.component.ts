import { Component, OnInit } from '@angular/core';
import { IProduit } from "../models/iproduit";

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
  constructor() {
    this.produits = [
      {
        code: "P100",
        nom: "Cafe",
        dateProduction: new Date(),
        prixUnitaire: 1.5,
        imageUrl: "https://openclipart.org/image/50px/svg_to_png/103015/1293946919.png",
        description: "empty",
        starRating: 4.2,
      },
      {
        code: "P200",
        nom: "The",
        dateProduction: new Date(),
        prixUnitaire: 0.5,
        imageUrl: "https://openclipart.org/image/50px/svg_to_png/18323/PrinterKiller-Cup-of-Tea.png",
        description: "empty",
        starRating: 4.8,
      },
      {
        code: "P300",
        nom: "Jus d'orange",
        dateProduction: new Date(),
        prixUnitaire: 3.5,
        imageUrl: "https://openclipart.org/image/50px/svg_to_png/241572/orangejuice.png",
        description: "empty",
        starRating: 3.7,
      }
    ]

  }

  ngOnInit() {
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
