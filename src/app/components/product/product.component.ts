import { Component, Input } from '@angular/core';
import { Iproduct } from 'src/app/modules/product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
})
export class ProductComponent {
  @Input() product: Iproduct;
  details = false;
  constructor() {
    this.product = {} as Iproduct;
  }
}
