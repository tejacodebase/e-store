import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class LoginService {
    startupVisited: boolean = false;
    isLoggedin: boolean = false;
}