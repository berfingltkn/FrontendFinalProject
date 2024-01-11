import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';//APı ye bağlanambilmek için HttpClient import etmemiz gerekiyor
import { ProductResponseModel } from '../models/productResponseModel';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  apiUrl = "http://localhost:34659/api/products/getall"
  
  constructor(private httpClient: HttpClient) { }

  getProducts():Observable<ProductResponseModel> {//dönüş tipi observable oldu
     return this.httpClient//httpClient ile istek yaptık
      .get<ProductResponseModel>(this.apiUrl);

  }

}
