import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import emailjs from '@emailjs/browser';

// ── EmailJS Configuration ──────────────────────────────────────────────
// These IDs are from your EmailJS account dashboard at https://emailjs.com
const EMAILJS_SERVICE_ID  = 'service_cni0gjb';    // ✅ connected
const EMAILJS_TEMPLATE_ID = 'template_thdek4r';   // ✅ connected
const EMAILJS_PUBLIC_KEY  = 'aaxTA2PNwFoFZE-oT';  // ✅ connected
// ──────────────────────────────────────────────────────────────────────

@Component({
  selector: 'app-contact',
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.css'
})
export class Contact {
  formData = { name: '', email: '', message: '' };
  status: 'idle' | 'sending' | 'success' | 'error' = 'idle';

  onSubmit() {
    if (this.status === 'sending') return;
    this.status = 'sending';

    emailjs.send(
      EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_ID,
      {
        from_name:  this.formData.name,
        from_email: this.formData.email,
        message:    this.formData.message,
        reply_to:   this.formData.email,
      },
      EMAILJS_PUBLIC_KEY
    ).then(() => {
      this.status = 'success';
      this.formData = { name: '', email: '', message: '' };
      setTimeout(() => this.status = 'idle', 5000);
    }).catch(() => {
      this.status = 'error';
      setTimeout(() => this.status = 'idle', 5000);
    });
  }
}
