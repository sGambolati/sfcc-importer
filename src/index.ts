import { Catalog } from "./clasess/catalog";

console.log('Hello world!')

const catalog = new Catalog();
catalog.ID = 'storefront-m';
catalog.name = 'Storefront master catalog';

console.log('Catalog: ', catalog.print());
