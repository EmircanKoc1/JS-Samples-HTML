
const writeName = (name = "name not defined ") => {
    console.log(name);
}

const writeConsole = (message) => console.log(message);


writeName();
writeName("hello");


import { sum } from "./math.js";


writeConsole(sum(1,2));


class BaseProduct {

    #priceAndName;

    constructor(price, productName) {
        this.price = price;
        this.productName = productName;

        this.#priceAndName = `price : ${this.price} , name : ${this.productName} `
    }


    WritePrice() {
        writeConsole(this.price);
    }
    writeProductName() {
        writeConsole(this.productName)
    }

    writeProductDetails() {
        writeConsole(this.#priceAndName);
    }

}

const product = new BaseProduct(135.4, "phone");
product.WritePrice();
product.writeProductName();
product.writeProductDetails();