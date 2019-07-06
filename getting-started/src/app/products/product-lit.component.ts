import { Component, OnInit } from "@angular/core";
import { IProduct } from "./product";
import { stringify } from "querystring";

@Component({
    selector: "pm-products",
    templateUrl: "./product-list.component.html",
    styleUrls:['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
    
    pageTitle: string = "Product List";
    imageWidth: number = 50;
    imageMargin: number = 2;
    showImage: boolean = false;
    //listFilter: string = "";
    
    private _listFilter : string;
    public get listFilter() : string {
        return this._listFilter;
    }
    public set listFilter(value : string) {
        this._listFilter = value;
        this.productsFiltered = value == "" ? this.products : this.filterProducts(this.listFilter);
    }
    
    productsFiltered : IProduct[]

    products : IProduct[] = [
        {
            "productId": 2,
            "productName": "Garden Cart",
            "productCode": "GDN-0023",
            "releaseDate": "March 18, 2016",
            "description": "15 gallon capacity rolling garden cart",
            "price": 32.99,
            "starRating": 4.2,
            "imageUrl": "https://openclipart.org/image/300px/svg_to_png/58471/garden_cart.png"
          },
          {
            "productId": 5,
            "productName": "Hammer",
            "productCode": "TBX-0048",
            "releaseDate": "May 21, 2016",
            "description": "Curved claw steel hammer",
            "price": 8.9,
            "starRating": 4.8,
            "imageUrl": "https://openclipart.org/image/300px/svg_to_png/73/rejon_Hammer.png"
          }
    ];

    constructor() {
        //super();
        this.listFilter = "";
    }
    toggleImage() : void {
        this.showImage = !this.showImage;
    }

    ngOnInit(): void {
        console.log('OnInit');
    }

    filterProducts(listFilter: string): any {
        listFilter = listFilter.toLocaleLowerCase();

        return this.products.filter((prod : IProduct) =>
            prod.productName.toLocaleLowerCase().indexOf(listFilter) !== -1);
    }
}