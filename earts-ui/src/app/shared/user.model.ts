import { Address } from './address.model';

export class User {

    private firstName: string;
    private lastName: string;
    private phoneNo: number;
    private email: string;
    private address: Address;
    private userName: string;
    private password: string;
    private imageUrl: string;
    private isActive: boolean;
    private role: string;

	constructor($firstName: string, $lastName: string, $phoneNo: number, $email: string, $address: Address, $userName: string, $password: string, $imageUrl: string, $isActive: boolean, $role: string) {
		this.firstName = $firstName;
		this.lastName = $lastName;
		this.phoneNo = $phoneNo;
		this.email = $email;
		this.address = $address;
		this.userName = $userName;
		this.password = $password;
		this.imageUrl = $imageUrl;
		this.isActive = $isActive;
		this.role = $role;
	}
}