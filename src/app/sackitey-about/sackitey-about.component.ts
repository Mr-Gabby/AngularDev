import { Component } from '@angular/core';
import { Student } from '../student';
@Component({
  selector: 'app-sackitey-about',
  templateUrl: './sackitey-about.component.html',
  styleUrl: './sackitey-about.component.css'
})
export class SackiteyAboutComponent {

  student!: Student; 

  constructor() { }

  ngOnInit(): void {
    
    this.student = {
      studentId: 991660150, 
      firstName: 'Gabriel', 
      lastName: 'Sackitey', 
      semester: 3
    };
  }
}
