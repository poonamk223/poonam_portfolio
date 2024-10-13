import { Component } from '@angular/core';
import { resumeData } from '../assets/resume-data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Poonam Portfolio';
  resumeData = resumeData;
}
