import { Arts } from "../arts/arts.model";

export class CartItem {
    public product: Arts;
    public qty: number;
    public isOrginal: boolean;

    constructor(product: Arts, qty: number, isOrginal: boolean) {
        this.product = product;
        this.qty = qty;
        this.isOrginal = isOrginal;
    }
}