import { getProducts } from "./products/ProductProvider.js"
import { getProductTypes } from "./products/ProductTypeProvider.js"
import ProductList from "./products/ProductList.js"

getProducts()
    .then(getProductTypes)
    .then(ProductList)