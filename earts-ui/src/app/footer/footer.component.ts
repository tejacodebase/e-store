import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  public adminMailId : String = '';
  public gmailLink : String = 'mosheart78@gmail.com';
  public contactNumber : String = '+91 73968 76461';
  public whatsappLink : String = 'https://api.whatsapp.com/send?phone=%2B917396876461&data=ARAaLv_Q2Yj3W7jznOHDF-77Obcg33eEboLnTn3nFPqUel99vCmwAZn0x3W6gkDwnW4GGbZjv0-XXzP6fpbod7uyoVO88Ul6j6Zhn1WSNgtzG1QD_z_ZmOuG895VQ4CAb0tRmk5WpKQdbNN_KtDgHxS0Bg&source=FB_Page&app=facebook&entry_point=page_cta';
  public composeMailLink : String = 'https://mail.google.com/mail/?view=cm&fs=1&to=mosheart78@gmail.com&su=Subject&body=Hello,';
  
  constructor() { }

  ngOnInit() {
  }
}
