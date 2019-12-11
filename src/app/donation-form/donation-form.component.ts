import { Component, OnInit, Directive } from '@angular/core';

import { Validators } from '@angular/forms';
import { FormBuilder,FormGroup } from '@angular/forms';


@Component({
  selector: 'app-donation-form',
  templateUrl: './donation-form.component.html',
  styleUrls: ['./donation-form.component.css']
  
})
/*export class DonationFormComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    
  }

}
*/

export class DonationFormComponent implements OnInit{
  profileForm = this.fb.group({
    firstName: ['', Validators.required],
    lastName: ['',Validators.required],
    dob: ['',Validators.required], 
    amount: ['',Validators.required],
    gender:['',Validators.required],
    dropdown:['',Validators.required],
    check:['',Validators.required],
    
    
  });
  constructor(private fb: FormBuilder) { }

  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.log(this.profileForm.value);
    this.profileForm.reset();
  }
  ngOnInit() {
  }


  
}