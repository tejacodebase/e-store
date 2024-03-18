import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class AppConstants {
    //  STORAGE NAMES
    CART_COUNT = "cartCount";
    CART_ITEMS_MAP = "cartItemsMap";
    SELECTED_ART = "selectedArt";
    SELECTED_CATEGOTY = "selectedCategory";
    SELECTED_ADDRESS = "selectedAddress";
}