import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact-form',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './contact-form.component.html',
  styleUrl: './contact-form.component.css'
})
export class ContactFormComponent {

  ContactForm = new FormGroup(
  {
    firstName : new FormControl(''),
    lastName : new FormControl(''),
    email : new FormControl(''),
    phone : new FormControl(''),
    address : new FormControl('')
  });

}
