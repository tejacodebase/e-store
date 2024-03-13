import { Component, ElementRef, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-us',
  standalone: true,
  imports: [],
  templateUrl: './contact-us.component.html',
  styleUrl: './contact-us.component.css'
})
export class ContactUsComponent implements OnInit, OnDestroy {
  fromName: string = '';
  fromEmail: string= '';
  emailAddress: string= 'mosheart78@gmail.com';
  message: string= '';

  constructor(private elementRef: ElementRef) { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    // this.elementRef.nativeElement.ownerDocument.body.style.backgroundColor = '#333333';
  }

  sendMessage() {

  }

  public ngOnDestroy() {
    // this.elementRef.nativeElement.ownerDocument.body.style.backgroundColor = 'white';
  }
}
