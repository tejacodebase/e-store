import { Art } from '../arts/art.model';

export class CartItem {
    public product: Art;
    public qty: number;
    public isOrginal: boolean;

    constructor(product: Art, qty: number, isOrginal: boolean) {
        this.product = product;
        this.qty = qty;
        this.isOrginal = isOrginal;
    }
}