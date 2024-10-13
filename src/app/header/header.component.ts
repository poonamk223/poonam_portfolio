import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
    @Input() basicInfo: any;

    downloadCV() {
      const link = document.createElement('a');
      link.href = 'assets/Poonam_Resume.pdf';
      link.download = 'Poonam_Resume.pdf';
      link.click();
    }
  }


