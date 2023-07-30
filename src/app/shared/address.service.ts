import { Injectable } from '@angular/core';
import { Address } from './address.model';

@Injectable({
  providedIn: 'root'
})
export class AddressService {
  addresses: Address[] = [];

  constructor() { }

  public getAddresses() {
    this.addresses = [new Address(1, "Teja Maridu", 9666926656, "Flat no : 106, Ark Enclave", "Srinivasa colony, Manikonda",
    "Hyderabad", "Telangana", "India", 500089, "Near GrocerKart.com"),
    new Address(2, "Phani Maridu", 9642392592, "Flat No: 345, TRF Towers", "Road no 12, West Street",
    "Down town", "Atlanta", "USA", 300032, "Opp Kings Burger"),
    new Address(3, "Anjani Maridu", 9666923333, "Flat no : 106, Ark Enclave", "Srinivasa colony, Manikonda",
    "Hyderabad", "Telangana", "India", 500089, "Near GrocerKart.com"),
    new Address(4, "Sai Maridu", 9666922121, "Flat no : 326, HKI Enclave", "Katraj colony, Jammura",
    "Kuttupakam", "Chennei", "India", 500089, "Near GrocerKart.com"),
    new Address(5, "Lakshmi Maridu", 9666922222, "H.No : 4/32/32G", "Videos colony, Gattaih center",
    "Khammam", "Telangana", "India", 500089, "Near Haveli Restarent")];
    
    return this.addresses;
  }
}
