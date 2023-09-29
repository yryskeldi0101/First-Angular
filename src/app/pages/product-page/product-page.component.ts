import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Iproduct } from 'src/app/modules/product';
import { ModalService } from 'src/app/services/modal.service';
import { ProductsService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css']
})
export class ProductPageComponent {
  title = 'angular-app';
  loading: boolean = false
  term: string = ""
  products$?: Observable<Iproduct[]>;
  constructor(public productService: ProductsService, public modalService: ModalService) { }
  ngOnInit(): void {
    this.loading = true
    this.productService.getAll().subscribe(() => {
      this.loading = false
    })
    this.loading = false
  }
}
