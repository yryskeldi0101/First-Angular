import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse, HttpParams } from "@angular/common/http"
import { Observable, catchError, delay, throwError, retry, tap } from "rxjs";
import { Iproduct } from "../modules/product";
import { ErrorService } from "./error.service";
@Injectable({
    providedIn: "root"
})

export class ProductsService {
    constructor(private http: HttpClient, private errorService: ErrorService) {
    }
    products: Iproduct[] = []
    getAll(): Observable<Iproduct[]> {
        return this.http.get<Iproduct[]>('https://fakestoreapi.com/products').pipe(delay(200), retry(2),tap(product => this.products = product), catchError(this.errorHandler.bind(this)))
    }
    private errorHandler(error: HttpErrorResponse) {
        this.errorService.handle(error.message)
        return throwError(() => error.message)
    }
    create(product: Iproduct) {
    return this.http.post<Iproduct>('https://fakestoreapi.com/products', product).pipe(tap(prod => this.products.push(prod)))
    }
}