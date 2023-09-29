import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from "@angular/forms"
import { ModalService } from 'src/app/services/modal.service';
import { ProductsService } from 'src/app/services/product.service';
@Component({
  selector: 'app-create-products',
  templateUrl: './create-products.component.html',
  styleUrls: ['./create-products.component.css']
})
export class CreateProductsComponent implements OnInit {
  form = new FormGroup({
    title: new FormControl<string>('', [Validators.required, Validators.minLength(6)])
  })
  get title() {
    return this.form.controls.title as FormControl
  }
  ngOnInit(): void {

  }
  constructor(private productService: ProductsService, private modalService: ModalService) { }
  submit() {
    this.productService.create({
      title: this.form.value.title as string,
      price: 15,
      description: "Lorem ipsum set",
      image: "https://i.pravatar.cc",
      category: 'electronic',
      rating:{
        rate: 43, 
        count: 5
      }
    }).subscribe(() => {
      this.modalService.close()
    })
  }
}
