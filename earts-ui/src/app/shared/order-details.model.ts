import { Arts } from "../arts/arts.model";

export class OrderDetails {
    oid: number;
    product: Arts;
    quantity: number;
    price: number;
    isOrginal: boolean;
    packingPrice: number;
    shippingPrice: number;
    subTotal: number;

    constructor($oid: number, $product: Arts, $quantity: number, $price: number, 
        $isOrginal: boolean, $packingPrice: number, $shippingPrice: number, $subTotal: number) {
        this.oid = $oid;
        this.product = $product;
        this.quantity = $quantity;
        this.price = $price;
        this.isOrginal = $isOrginal;
        this.packingPrice = $packingPrice;
        this.shippingPrice = $shippingPrice;
        this.subTotal = $subTotal;
    }
}