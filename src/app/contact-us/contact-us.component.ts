import { Component, OnInit, ElementRef, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent implements OnInit, OnDestroy {
  fromName: string;
  fromEmail: string;
  message: string;

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
