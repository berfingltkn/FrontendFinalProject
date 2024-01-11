import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/product';
import { ProductResponseModel } from '../../models/productResponseModel';

import { response } from 'express';
import { ProductService } from '../../services/product.service';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent implements OnInit {

  products: Product[] = [];
  //productResponseModel:ProductResponseModel={};
  
 
  constructor(private productService:ProductService) { } // Service i kullanabilmek için bunu yapmalıyız.

  ngOnInit(): void {
    //component ilk kez açıldığında çalışan method
    this.getProducts();
  }

getProducts(){
  
this.productService.getProducts().subscribe(response=>{
  this.products = response.data
})

}


}