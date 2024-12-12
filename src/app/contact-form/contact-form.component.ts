import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-form',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  providers : [ FormBuilder, Validators],
  templateUrl: './contact-form.component.html',
  styleUrl: './contact-form.component.css'
})
export class ContactFormComponent {

  obj = new FormBuilder();
  displayFlag = false;
  ContactForm = this.obj.group(
  {
    firstName: ['',[Validators.required, Validators.pattern('^[a-zA-Z ]*$')]],
    lastName: ['',[Validators.required, Validators.pattern('^[a-zA-Z ]*$')]],
    email: ['',[Validators.required, Validators.pattern('^[a-zA-Z0-9._%+-]+@[a-zA-Z]{1,}\.[a-zA-Z]{2,}$')]],
    phone : ['',[Validators.required,Validators.pattern('^((\\+91-?)|0)?[0-9]{10}$')]],
    City: ['',[Validators.required, Validators.pattern('^(.*?[a-zA-Z]){4,}.*$')]],
    state: ['',[Validators.required]],
    zipcode: ['', [Validators.required, Validators.pattern(/^\d{5}$/)]],
    comment: ['',[Validators.required,Validators.minLength(30)]]
  });

  showData(){
    this.displayFlag = true;
  }
}
