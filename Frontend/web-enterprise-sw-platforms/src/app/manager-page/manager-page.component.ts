import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-manager-page',
  templateUrl: './manager-page.component.html',
  styleUrls: ['./manager-page.component.css']
})

export class ManagerPageComponent implements OnInit {
  signupForm = new FormGroup({
    user_name: new FormControl(null),
    user_email: new FormControl(null),
    password_group: new FormGroup({
          user_password: new FormControl(null),
          user_confirmPassword: new FormControl(null),
        }),
    user_phone: new FormControl(null),
    user_gender: new FormControl('Male'),
    user_city: new FormControl('Ahmedabad'),
    user_notification: new FormControl('email')
  });
  constructor() { }
  
  ngOnInit(): void {
  }
  onSubmit() {
  }
 
}
