// 100/100 in Judge

class FashionRetailInventory {
    productStock = [];

    constructor(storehouse, location) {
        this.storehouse = storehouse;
        this.location = location;
    }

    addProduct (productName, size, quantity, price) {
        let product = this.productStock.find(p => p.productName === productName && p.size === size);
        if (!product) {
            this.productStock.push({productName, size, quantity, price});
            return `The product ${productName}, size ${size} was successfully added to the inventory`;
        } else {
            this.productStock = this.productStock.forEach(pr => {
                if (pr.productName === productName && pr.size === size){
                    return pr.quantity += quantity;
                }
            })
            return `You added ${quantity} more pieces of product ${productName} size ${size}`;
        }
    }
    
    sendProduct (productName, size) {
        let product = this.productStock.find(p => p.productName === productName && p.size === size);
        if (!product) {
            throw new Error(`The product ${productName}, size ${size} is not in the inventory`);
        } else {
            this.productStock = this.productStock.filter(pr => pr.productName !== productName && pr.size !== size);
            return `The product ${productName}, size ${size} was successfully removed from the inventory`;
        }
    }

    findProductsBySize(size) {
        let oneSizeProducts = this.productStock.filter(pr => pr.size === size);
        if (!oneSizeProducts.length) {
            return `There are no products available in that size`;
        } else {
            let message = [];
            oneSizeProducts.forEach(pr => message.push(`${pr.productName}-${pr.quantity} pieces`));
            return message.join(", ");
        }
    }

    listProducts () {
        if (!this.productStock.length) {
            return `${this.storehouse} storehouse is empty`;
        } else {
            let message = [`${this.storehouse} storehouse in ${this.location} available products:`];
            let sortedProdicts = this.productStock.sort((a, b) => a.productName.localeCompare(b.productName))
                             .forEach(pr => message.push(`${pr.productName}/Size:${pr.size}/Quantity:${pr.quantity}/Price:${pr.price}$`));
            return message.join("\n");
        }
    }

}


// input 1
// const storeHouse = new FashionRetailInventory("East", "Milano");
// console.log(storeHouse.addProduct("Shirt", "M", 10, 25.0));
// console.log(storeHouse.addProduct("T-Shirt", "M", 10, 25.0));
// console.log(storeHouse.addProduct("Sweather", "M", 10, 25.0));
// console.log(storeHouse.addProduct("Sweather", "M", 10, 25.0));


// input 2
const storeHouse = new FashionRetailInventory("East", "Milano");
console.log(storeHouse.addProduct("Shirt", "M", 10, 25.0));
console.log(storeHouse.addProduct("T-Shirt", "M", 10, 25.0));
console.log(storeHouse.sendProduct("T-Shirt", "M"));
console.log(storeHouse.sendProduct("Sweather", "M"));


// input 3
// const storeHouse = new FashionRetailInventory("East", "Milano");
// console.log(storeHouse.addProduct("Shirt", "M", 10, 25.0));
// console.log(storeHouse.addProduct("T-Shirt", "M", 10, 25.0));
// console.log(storeHouse.findProductsBySize("M"));
// console.log(storeHouse.findProductsBySize("XL"));


// input 4
// const storeHouse = new FashionRetailInventory("East", "Milano");
// console.log(storeHouse.addProduct("Shirt", "M", 10, 25.0));
// console.log(storeHouse.addProduct("T-Shirt", "M", 10, 25.0));
// console.log(storeHouse.addProduct("Shirt", "L", 5, 30.0));
// console.log(storeHouse.addProduct("Shoes", "9", 8, 50.0));
// console.log(storeHouse.sendProduct("Shoes", "9", 8, 50.0));
// console.log(storeHouse.listProducts());


// additional input 
// const storeHouse = new FashionRetailInventory("East", "Milano");
// console.log(storeHouse.addProduct("Shirt", "M", 10, 25.0));
// console.log(storeHouse.findProductsBySize("M"));
// console.log(storeHouse.sendProduct("Shirt", "M"));
// console.log(storeHouse.listProducts());
