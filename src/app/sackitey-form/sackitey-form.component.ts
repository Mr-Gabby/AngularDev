import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-sackitey-form',
  templateUrl: './sackitey-form.component.html',
  styleUrl: './sackitey-form.component.css'
})
export class SackiteyFormComponent {

  userForm!: FormGroup;
  submittedFormData: any;

  constructor() { }
  ngOnInit(): void {
  
    this.userForm = new FormGroup({
      userId: new FormControl('', [Validators.required, Validators.minLength(5)]),
      email: new FormControl('', [Validators.required, Validators.email]),
      semester: new FormControl('', Validators.required)
    });
  }
  submitForm() {
    if (this.userForm.valid) {
      this.submittedFormData = this.userForm.value;
    }
  }
}
