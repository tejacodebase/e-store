import { Art } from '../arts/art.model';

export class OrderDetails {
    oid: number;
    product: Art;
    quantity: number;
    price: number;
    isOrginal: boolean;
    packingPrice: number;
    shippingPrice: number;
    subTotal: number;

    constructor($oid: number, $product: Art, $quantity: number, $price: number, $isOrginal: boolean, $packingPrice: number,
        $shippingPrice: number) {
        this.oid = $oid;
        this.product = $product;
        this.quantity = $quantity;
        this.price = $price;
        this.isOrginal = $isOrginal;
        this.packingPrice = $packingPrice;
        this.shippingPrice = $shippingPrice;
    }
}