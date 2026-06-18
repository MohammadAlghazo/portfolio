import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.css'
})
export class Contact {
  formData = {
    name: '',
    email: '',
    message: ''
  };

  onSubmit() {
    alert("Thanks for your message! This is a demo form.");
    this.formData = { name: '', email: '', message: '' };
  }
}
