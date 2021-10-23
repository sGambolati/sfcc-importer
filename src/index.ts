import { Catalog } from "./clasess/catalog";
import { MasterProduct } from "./clasess/masterProduct";

console.log('Hello world!')

const catalog = new Catalog();
catalog.ID = 'storefront-m';
catalog.name = 'Storefront master catalog';

const product = new MasterProduct();
product.ID = '1001';
product.name = 'Product 1';

catalog.AddProduct(product);

console.log('Catalog: ', catalog.print());