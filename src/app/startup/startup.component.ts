import { Component, OnInit, ElementRef, OnDestroy } from '@angular/core';
import { Subscription, interval } from 'rxjs';
import { Router } from '@angular/router';
import { LoginService } from '../shared/login.service';

@Component({
  selector: 'app-startup',
  templateUrl: './startup.component.html',
  styleUrls: ['./startup.component.scss']
})
export class StartupComponent implements OnInit, OnDestroy {
  duration: number = 1000;
  subscription: Subscription;

  constructor(private elementRef: ElementRef, private router: Router, private loginService : LoginService) {
  }

  ngAfterViewInit() {
    this.loginService.startupVisited = true;
    this.elementRef.nativeElement.ownerDocument.body.style.backgroundColor = '#333';
  }

  public ngOnInit() {
    console.log(this.loginService.startupVisited);
    if (this.loginService.startupVisited) {
      this.gotoHome();
    }
    const source = interval(1000);
    this.subscription = source.subscribe(val => {
      --this.duration;
      if (this.duration <= 0) {
        this.subscription.unsubscribe();
        this.gotoHome();
      }
    });
  }

  public ngOnDestroy() {
    // this.elementRef.nativeElement.ownerDocument.body.style.backgroundColor = 'white';
    this.subscription.unsubscribe();
  }

  public gotoHome() {
    this.router.navigate(['home']);
  }
}
