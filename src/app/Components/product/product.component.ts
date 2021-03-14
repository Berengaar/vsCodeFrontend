import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  user = "Emirhan avcı"   //Tip güvenliği şart değil ama önemli, noktalı virgül şart değil
 
  //süslü parantez{} obje demek
  //Köşeli parantez [] liste demek

  products: Product[] = [];
  constructor() { }

  ngOnInit(): void {
  }

}
