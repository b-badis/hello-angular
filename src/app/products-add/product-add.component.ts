import { Component, OnInit } from '@angular/core';
import { IProduit } from "../models/iproduit";
import { ProductService } from "../services/product.service";

@Component({
  selector: 'app-products-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent implements OnInit {

  product: IProduit = {
    "code": "P411",
    "nom": "",
    "dateProduction": new Date,
    "description": "",
    "prixUnitaire": 100,
    "starRating": 2,
    "imageUrl": "http://openclipart.org/image/300px/svg_to_png/73/rejon_Hammer.png"
  };

  constructor(private _service: ProductService) { }

  ngOnInit() { }
  addProduct(): void {
      this._service.addProduct(this.product).subscribe(response =>  {
							if(response.error) { 
	                        	console.log('The user could not be added, server Error.');
	                        }
                        },
                        error=> {
                       		console.log('The user could not be added, server Error.');
                       	});
      ;
  }
}
