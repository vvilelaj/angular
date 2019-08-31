import {
  Resolve,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from '@angular/router';
import { ProductService } from './product.service';
import { Observable, of } from 'rxjs';
import { ProductResolved } from './product';
import { Injectable } from '@angular/core';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductResolver implements Resolve<ProductResolved> {
  constructor(private productService: ProductService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<ProductResolved> {
    const id = route.paramMap.get('id');

    if (isNaN(+id)) {
      const message = `Product id is not a number : ${id}`;
      console.error(message);
      return of({ error: message, product: null });
    }

    return this.productService.getProduct(+id).pipe(
      map(product => ({ product: product })),
      catchError(error => {
        const message = `Retrieval error : ${error}`;
        console.error(message);
        return of({ product: null, error: error });
      })
    );
  }
}
