import { Component, OnInit } from "@angular/core";
import { IProduct } from "./product";
import { ProductService } from "./product.service";

@Component({
    selector: "pm-products",
    templateUrl: "./product-list.component.html",
    styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

    pageTitle: string = "Product List";
    imageWidth: number = 50;
    imageMargin: number = 2;
    showImage: boolean = false;

    private _listFilter: string;
    public get listFilter(): string {
        return this._listFilter;
    }
    public set listFilter(value: string) {
        this._listFilter = value;
        this.productsFiltered = value == "" ? this.products : this.filterProducts(this.listFilter);
    }

    productsFiltered: IProduct[]
    products: IProduct[];

    constructor(private productService: ProductService) {
    }

    toggleImage(): void {
        this.showImage = !this.showImage;
    }

    ngOnInit(): void {
        this.productService.getProducts().subscribe(
            products =>{
                this.products = products;
                this.listFilter = "";
            },
            error => {
                this.products = [];
            }
        );
    }

    filterProducts(listFilter: string): any {
        listFilter = listFilter.toLocaleLowerCase();

        return this.products.filter((prod: IProduct) =>
            prod.productName.toLocaleLowerCase().indexOf(listFilter) !== -1);
    }

    onRatingClicked(message: string): void {
        this.pageTitle = "Product List : " + message;
    }
}