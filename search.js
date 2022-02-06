const products = [
    { name: 'iphone 14', price: 7000 },
    { name: 'samsung laptop', price: 0000 },
    { name: 'vivo y39', price: 8000 },
    { name: 'laptop pro', price: 29000 },
    { name: 'singer laptop', price: 20000 },
    { name: 'apple watch', price: 107000 },
    { name: 'walton watch', price: 15000 },
    { name: 'magic chula', price: 3000 },
    { name: 'book ami topu', price: 500 },
];

function searchProduct(products, searchText) {
    const result = [];
    for (const product of products) {
        if (product.name.includes(searchText)) {
            result.push(product)
            
        }

      
    }
    return result;
}
const result = searchProduct(products, 'watch');
console.log(result)