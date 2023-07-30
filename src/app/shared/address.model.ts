export class Address {
    oid: number;
    name: string;
    phoneNo: number;
    address: string;
    address2: string;
    city: string;
    state: string;
    country: string;
    pincode: number;
    landmark: string;

    constructor(oid: number, name: string, phoneNo: number, address: string, address2: string, city:
        string, state: string, country: string, pincode: number, landmark: string) {
        this.oid = oid;
        this.name = name;
        this.phoneNo = phoneNo;
        this.address = address;
        this.address2 = address2;
        this.city = city;
        this.state = state;
        this.country = country;
        this.pincode = pincode;
        this.landmark = landmark;
    }
}