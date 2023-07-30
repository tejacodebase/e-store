import { User } from './user.model';
import { OrderDetails } from './order-details.model';
import { Address } from './address.model';

export class Order {
    oid: number;
    orderId: string;
    orderDetails: OrderDetails[];
    subTotal: number;
    grandTotal: number;
    trackingNumber: string;
    orderStatus: string;
    phone: string;
    email: string;
    orderDate: Date;
    createdDtt: Date;
    paymentOid: number;
    tax: number;
    deliveryCharges: number;
    shipped: boolean;
    paymentStatus: string;
    customerOid: User;
    delivaryAddress: Address;

	constructor($oid: number, $orderId: string, $orderDetails: OrderDetails[], $grandTotal: number, $trackingNumber: string, $orderStatus: string, $phone: string, $email: string, $orderDate: Date, $createdDtt: Date, $paymentOid: number, $tax: number, $deliveryCharges: number, $shipped: boolean, $paymentStatus: string, $customerOid: User) {
		this.oid = $oid;
		this.orderId = $orderId;
		this.orderDetails = $orderDetails;
		this.grandTotal = $grandTotal;
		this.trackingNumber = $trackingNumber;
		this.orderStatus = $orderStatus;
		this.phone = $phone;
		this.email = $email;
		this.orderDate = $orderDate;
		this.createdDtt = $createdDtt;
		this.paymentOid = $paymentOid;
		this.tax = $tax;
		this.deliveryCharges = $deliveryCharges;
		this.shipped = $shipped;
		this.paymentStatus = $paymentStatus;
		this.customerOid = $customerOid;
	}
}