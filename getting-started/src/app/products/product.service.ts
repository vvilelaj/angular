import { Injectable } from "@angular/core";
import { IProduct } from "./product";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { catchError, tap } from "rxjs/operators";

@Injectable({
    providedIn: 'root'
})
export class ProductService {
    productApiUrl : string = "api/products/products.json";

    constructor(private http: HttpClient) {
        
    }

    getProducts(): Observable<IProduct[]> {
        return this.http.get<IProduct[]>(this.productApiUrl).pipe(
            tap(data => console.log('All :' + JSON.stringify(data))),
            catchError(this.handleError)
        );
    }

    handleError(error: HttpErrorResponse) {
        console.log(error);
        return throwError('Error');
    }
}