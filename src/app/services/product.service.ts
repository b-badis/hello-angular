import { Injectable } from '@angular/core';
import { IProduit } from "../models/iproduit";
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class ProductService {

  url: string = 'http://localhost:3000/products';

  constructor(private http: Http) { }

  getProducts(): Observable<IProduit[]> {

    return this.http.get(this.url)
      .map((response: Response) => <IProduit[]>response.json());
  }
  addProduct(product: IProduit): Observable<any> {
    let options = new RequestOptions({
      headers: new Headers({ 'Content-Type': 'application/json;charset=UTF-8' })
    });
    return this.http.post(this.url, JSON.stringify(product), options)
      .map((response: Response) => response.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));

  }

}

