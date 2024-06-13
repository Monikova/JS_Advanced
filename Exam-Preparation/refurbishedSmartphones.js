// 83/100 in Judge

class RefurbishedSmartphones {
  constructor(retailer) {
    this.retailer = retailer;
    this.availableSmartphones = [];
    this.soldSmartphones = [];
    this.revenue = 0;  
  }
 
  addSmartphone (model, storage, price, condition) {
    if (!model || storage < 0 || price < 0 || !condition) {
    throw new Error("Invalid smartphone!");
    } else {
    this.availableSmartphones.push({model, storage, price, condition});
    return `New smartphone added: ${model} / ${storage} GB / ${condition} condition - ${price.toFixed(2)}$`
    }
  }
 
  sellSmartphone (model, desiredStorage) {
  let isSmartphoneFound = false;
    for (let i = 0; i < this.availableSmartphones.length; i++) {
      let smartphone = this.availableSmartphones[i];
      if (smartphone.model === model) {
      let storageDiff = smartphone.storage - desiredStorage;
        let soldPrice = 0;
        if (smartphone.storage >= desiredStorage) {
          soldPrice = smartphone.price;
        } else if (storageDiff <= 128) {
          soldPrice = smartphone.price * 0.9;
        } else if (storageDiff > 128) {
          soldPrice = smartphone.price * 0.8;
        }
        
        this.soldSmartphones.push({model, storage: smartphone.storage, soldPrice});
        this.availableSmartphones.splice(i, 1);
        this.revenue += soldPrice;
        return `${model} was sold for ${soldPrice.toFixed(2)}$`;
      }
    }
    
    if (!isSmartphoneFound) {
      throw new Error(`${model} was not found!`);
    }
  }
 
  upgradePhones (){
    if (this.availableSmartphones.length) {
      this.availableSmartphones.forEach(s => s.storage *= 2)
      // console.log(this.availableSmartphones.map(s => s.storage * 2));
      let message = " Upgraded Smartphones:\n";
      this.availableSmartphones.forEach(sm => message += `${sm.model} / ${sm.storage} GB / ${sm.condition} condition / ${sm.price.toFixed(2)}$\n`);
      return message.trim();
    } else {
      throw new Error("There are no available smartphones!");
    }
  }
 
  salesJournal (criteria) {
  let sorted = [];
    if (criteria !== 'storage' && criteria !== 'model') {
      throw new Error("Invalid criteria!");
    } else {
      if (criteria === 'storage'){
        this.soldSmartphones.sort((a, b) => b.storage - a.storage);
      } else {
        this.soldSmartphones.sort((a, b) => a.model.localeCompare(b.model));
      }
      let message = `${ this.retailer} has a total income of ${ this.revenue.toFixed(2) }$\n${this.soldSmartphones.length} smartphones sold:\n`;
      this.soldSmartphones.forEach(s => message += `${s.model} / ${s.storage} GB / ${s.soldPrice.toFixed(2)}$\n`);
      return message.trim();
    }
  }
 
}



// Input 1
// let retailer = new RefurbishedSmartphones('SecondLife Devices');
// console.log(retailer.addSmartphone('Samsung S20 Ultra', 256, 1000, 'good'));
// console.log(retailer.addSmartphone('Iphone 12 mini', 128, 800, 'perfect'));
// console.log(retailer.addSmartphone('', 512, 1900, 'good'));

//Input 2
// let retailer = new RefurbishedSmartphones('SecondLife Devices');
// retailer.addSmartphone('Samsung S20 Ultra', 256, 1000, 'good');
// retailer.addSmartphone('Iphone 12 mini', 128, 800, 'perfect');
// retailer.addSmartphone('Xiaomi Redmi Note 10 Pro', 128, 330, 'perfect');
// console.log(retailer.sellSmartphone('Samsung S20 Ultra', 256));
// console.log(retailer.sellSmartphone('Xiaomi Redmi Note 10 Pro', 256));
// console.log(retailer.sellSmartphone('Samsung Galaxy A13', 64));


//Input 3
// let retailer = new RefurbishedSmartphones('SecondLife Devices');
// retailer.addSmartphone('Samsung S20 Ultra', 256, 1000, 'good');
// retailer.addSmartphone('Iphone 12 mini', 128, 800, 'perfect');
// retailer.addSmartphone('Xiaomi Redmi Note 10 Pro', 128, 330, 'perfect');
// console.log(retailer.upgradePhones());


//Input 4
let retailer = new RefurbishedSmartphones('SecondLife Devices');
retailer.addSmartphone('Samsung S20 Ultra', 256, 1000, 'good');
retailer.addSmartphone('Iphone 12 mini', 128, 800, 'perfect');
retailer.addSmartphone('Xiaomi Redmi Note 10 Pro', 128, 330, 'perfect');
retailer.sellSmartphone('Samsung S20 Ultra', 256);
retailer.sellSmartphone('Xiaomi Redmi Note 10 Pro', 256);
console.log(retailer.salesJournal('model')); 
