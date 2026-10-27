import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import emailjs from '@emailjs/browser';

@Component({
  selector: 'app-contact',
  imports: [FormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact {
  @ViewChild('formElement') formElement?: ElementRef<HTMLFormElement>;
  formData = { name: '', email: '', message: '' };
  status: 'idle' | 'sending' | 'success' | 'error' = 'idle';
  submitted = false;
  touched: Record<string, boolean> = {};
  get errors() {
    return {
      name:
        this.formData.name.trim().length < 2
          ? 'Please enter your name (at least 2 characters)'
          : '',
      email: !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(this.formData.email.trim())
        ? 'Enter a valid email address so I can reply'
        : '',
      message:
        this.formData.message.trim().length < 10
          ? 'Add a little detail (at least 10 characters).'
          : '',
    };
  }
  showError(field: 'name' | 'email' | 'message') {
    return (this.submitted || this.touched[field]) && !!this.errors[field];
  }
  async onSubmit(form: NgForm) {
    if (this.status === 'sending') return;
    this.submitted = true;
    const firstInvalid = (['name', 'email', 'message'] as const).find(
      (field) => this.errors[field],
    );
    if (firstInvalid) {
      this.formElement?.nativeElement.querySelector<HTMLElement>('#' + firstInvalid)?.focus();
      return;
    }
    this.status = 'sending';
    let timeout: ReturnType<typeof setTimeout> | undefined;
    try {
      await Promise.race([
        emailjs.send(
          'service_cni0gjb',
          'template_thdek4r',
          {
            from_name: this.formData.name.trim(),
            from_email: this.formData.email.trim(),
            message: this.formData.message.trim(),
            reply_to: this.formData.email.trim(),
          },
          'aaxTA2PNwFoFZE-oT',
        ),
        new Promise((_, reject) => {
          timeout = setTimeout(() => reject(new Error('Delivery not confirmed')), 20000);
        }),
      ]);
      this.status = 'success';
      this.submitted = false;
      this.touched = {};
      form.resetForm({ name: '', email: '', message: '' });
      this.formData = { name: '', email: '', message: '' };
    } catch {
      this.status = 'error';
    } finally {
      if (timeout) clearTimeout(timeout);
    }
  }
}
