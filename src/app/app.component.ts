import { Component, OnInit } from '@angular/core';
import { Iproduct } from './modules/product';
import { products as data } from "./data/products"
import { ProductsService } from './services/product.service';
import { Observable, tap } from 'rxjs';
import { ModalService } from './services/modal.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

}
