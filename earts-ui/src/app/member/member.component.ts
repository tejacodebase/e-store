import { Component } from '@angular/core';
import { LoginComponent } from '../login/login.component';
import { SignUpComponent } from '../sign-up/sign-up.component';

@Component({
  selector: 'app-member',
  standalone: true,
  imports: [LoginComponent, SignUpComponent],
  templateUrl: './member.component.html',
  styleUrl: './member.component.css'
})
export class MemberComponent {

}
