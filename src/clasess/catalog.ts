import { Product } from "./product";

export class Catalog {
    ID: string;
    name: string;
    products: Product[] = [];

    /**
     * AddProduct
     */
    public AddProduct(product: Product) {
        
    }

    /**
     * print
     * @returns a string with all catalog content.
     */
    public print() : string {
        return `<xml ... ${this.ID} - ${this.name}>`;
    }
}