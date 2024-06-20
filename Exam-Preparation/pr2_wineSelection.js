class WineSelection {
    wines = [];
    bill = 0;

    constructor(space) {
        this.space = space;
    }

    reserveABottle (wineName, wineType, price) {
        if (!this.space) {
            throw new Error("Not enough space in the cellar.");
        } else {
            this.wines.push({wineName, wineType, price, paid: false});
            this.space--;
            return `You reserved a bottle of ${wineName} ${wineType} wine.`;
        }
    }

    payWineBottle( wineName, price ) {
        const wine = this.wines.find(w => w.wineName === wineName);
        if (!wine) {
            throw new Error(`${wineName} is not in the cellar.`);
        } else if (wine.paid === true) {
            throw new Error(`${wineName} has already been paid.`);
        } else {
            // this.wines = this.wines.forEach(w => {
            //     w.wineName === wineName;
            //     return w.paid = true;
            // })
            for (let i = 0; i < this.wines.length; i++) {
                if (this.wines[i].wineName === wineName) {
                    this.wines[i].paid = true;
                }
            }
            this.bill += price;
            return `You bought a ${wineName} for a ${price}$.`;
        }
    }

    openBottle(wineName) {
        const wine = this.wines.find(w => w.wineName === wineName);
        if (!wine) {
            throw new Error(`The wine, you're looking for, is not found.`);
        } 
        
        if (wine.paid === false) {
            throw new Error(`${wineName} need to be paid before open the bottle.`);
        }

        this.wines = this.wines.filter(w => w.wineName !== wineName);
        return `You drank a bottle of ${wineName}.`;
    }

    cellarRevision(wineType) {
        if (!wineType) {
            let message = [`You have space for ${this.space} bottles more.`, `You paid ${this.bill}$ for the wine.`];
            this.wines.sort((a, b) => a.wineName.localeCompare(b.wineName)).forEach(w => message.push(`${w.wineName} > ${w.wineType} - ${w.paid === true ? "Has Paid" : "Not Paid"}.`));
            return message.join("\n");
        } else {
            let wine = this.wines.find(w => w.wineType === wineType);
            if (wine) {
                return `${wine.wineName} > ${wine.wineType} - ${wine.paid === true ? "Has Paid" : "Not Paid"}.`;
            } else {
                throw new Error(`There is no ${wineType} in the cellar.`);
            }
        }
    }
}


// input 1
// const selection = new WineSelection(2)
// console.log(selection.reserveABottle('Sauvignon Blanc Marlborough', 'White', 50));
// console.log(selection.reserveABottle('Cabernet Sauvignon Napa Valley', 'Red', 120));
// console.log(selection.reserveABottle('Bodegas Godelia Mencía', 'Rose', 144));


// input 2
// const selection = new WineSelection(2)
// selection.reserveABottle('Sauvignon Blanc Marlborough', 'White',50);
// console.log(selection.payWineBottle('Sauvignon Blanc Marlborough', 120));
// console.log(selection.payWineBottle('Bodegas Godelia Mencía', 144));


// input 3
// const selection = new WineSelection(2)
// selection.reserveABottle('Sauvignon Blanc Marlborough', 'White', 50);
// selection.reserveABottle('Cabernet Sauvignon Napa Valley', 'Red', 120);
// selection.payWineBottle('Sauvignon Blanc Marlborough', 50);
// console.log(selection.openBottle('Sauvignon Blanc Marlborough'));
// console.log(selection.openBottle('Cabernet Sauvignon Napa Valley'));


// input 4
// const selection = new WineSelection(2)
// console.log(selection.reserveABottle('Bodegas Godelia Mencía', 'Rose', 144)); 
// console.log(selection.cellarRevision('Rose'));


// input 5
const selection = new WineSelection(5)
selection.reserveABottle('Bodegas Godelia Mencía', 'Rose', 144);
selection.payWineBottle('Bodegas Godelia Mencía', 144);
selection.reserveABottle('Sauvignon Blanc Marlborough', 'White', 50);
selection.reserveABottle('Cabernet Sauvignon Napa Valley', 'Red', 120);
console.log(selection.cellarRevision());
