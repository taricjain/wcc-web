/*
All Data models for WCC_Web in this file.
All models in this file have to be exported to be used.
*/

enum OrderStatus {
    RECEIVED = 0,
    PROCESSING = 1,
    PROCESSED = 2
}

export class Checkout {
    product: Product;
    payment: Payment;
    user: User;
    orderStatus: OrderStatus;
    specialRequest: string;

    constructor() {
        this.product = new Product();
        this.user = new User();
        this.orderStatus = OrderStatus.RECEIVED;
    }
}

export class Payment {
    isSuccessful: boolean;
}

export class Product {
    id: string;
    name: string;
    price: number;
    imgURL: string;
}

export class User {
    id: number;
    fullName: string;
    email: string;
    mobileNumber: string;

    constructor() {
        this.id = 0;
    }
}

export interface CallbackInterface {
    (error: Error, result?: any) : void;
}