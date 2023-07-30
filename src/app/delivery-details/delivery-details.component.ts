import { Component, OnInit } from '@angular/core';
import { Address } from '../shared/address.model';
import { AddressService } from '../shared/address.service';
import { LocalStorageService } from '../shared/local-storage.service';
import { CartService } from '../cart/cart.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-delivery-details',
  templateUrl: './delivery-details.component.html',
  styleUrls: ['./delivery-details.component.scss']
})
export class DeliveryDetailsComponent implements OnInit {
  addresses: Address[];
  selectedAddress: Address = {} as Address;

  constructor(private addressService: AddressService, private cartService: CartService, private router: Router,
    private toastr: ToastrService) {

  }

  ngOnInit() {
    this.addresses = this.addressService.getAddresses();
    this.selectedAddress = this.cartService.getSelectedAddress();
    if (!this.selectedAddress) {
      // this.selectedAddress = this.addresses[0];
      this.selectedAddress = {} as Address;
    }
  }

  selectAddress(address: Address) {
    this.selectedAddress = address;
    this.cartService.setSelectedAddress(address);
  }

  gotoOrderOverview() {
    if (!this.selectedAddress || !this.selectedAddress.oid) {
      this.toastr.warning("Please select address.");
      return;
    }
    this.router.navigate(['/orderOverview']);
  }
}
