import Product from "./product";

const productList = [
    new Product(1, "Laptop", 1500, 10, false),
    new Product(2, "Smartphone", 800, 25, false),
    new Product(3, "Tablet", 600, 15, true),
    new Product(4, "Smartwatch", 300, 30, false),
    new Product(5, "Headphones", 100, 50, true)
];

export function getProducts() {
    return productList;
}
export function getProductById(productId) {
    return productList.find(product => product.productId === productId);
}
export function upsert(product) {
    const index = productList.findIndex(
        p => p.productId === product.productId
    );
    if (index > -1) {
        productList.splice(index, 1, product);
    } else {
        productList.unshift(product);
    }
}
export function remove(productId) {
    const index = productList.findIndex(
        product => product.productId === productId
    );
    if (index > -1) {
        productList.splice(index, 1);
    }
}