// 88/100 in Judge !!!

class FashionRetailInventory {
    constructor(storehouse, location) {
        this.storehouse = storehouse;
        this.location = location;
        this.productStock = [];
    }

    addProduct(productName, size, quantity, price) {
        if (this.productStock.length === 0) {
            this.productStock.push({ productName, size, quantity, price });
            return `The product ${productName}, size ${size} was successfully added to the inventory`;
        } else {
            let isProductFound = false;
            for (let product of this.productStock) {
                if (product.productName === productName && product.size === size) {
                    product.quantity += quantity
                    isProductFound = true;
                    return `You added ${quantity} more pieces of product ${productName} size ${size}`;
                }
            }

            if (!isProductFound) {
                this.productStock.push({ productName, size, quantity, price });
                return `The product ${productName}, size ${size} was successfully added to the inventory`;
            }
        }
    }

    sendProduct(productName, size) {
        let isProductInStock = false;
        for (let i = 0; i < this.productStock.length; i++) {
            if (this.productStock[i].productName === productName && this.productStock[i].size === size) {
                this.productStock.splice(i, 1);
                isProductInStock = true;
                return `The product ${productName}, size ${size} was successfully removed from the inventory`;
            }
        }

        if (!isProductInStock) {
            throw new Error(`The product ${productName}, size ${size} is not in the inventory`);
        }
    }

    findProductsBySize(size) {
        let message = [];
        for (let product of this.productStock) {
            if (product.size === size) {
                message.push(`${product.productName}-${product.quantity} pieces`);
            }
        }

        if (!message.length) {
            return "There are no products available in that size";
        } else {
            return message.join(", ");
        }
    }

    listProducts() {
        let message = '';
        if (!this.productStock.length) {
            message = `${this.storehouse} storehouse is empty`;
        } else {
            message = `${this.storehouse} storehouse in ${this.location} available products:\n`;
            this.productStock.sort((a, b) => a.productName.localeCompare(b.productName)).forEach(pr => message += `${pr.productName}/Size:${pr.size}/Quantity:${pr.quantity}/Price:${pr.price}$\n`);
        }
        return message;
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
