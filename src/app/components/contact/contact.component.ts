import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  contactInfo = {
    phone: '098485 82348',
    address: 'Near SBI, Kurasala Vari Street, Konkapalli, Amalapuram',
    city: 'Amalapuram, Andhra Pradesh 533201',
    timing: '6:30 AM - 8:00 AM (Daily)'
  };

  formData = {
    name: '',
    phone: '',
    message: ''
  };

  onSubmit() {
    console.log('Form submitted:', this.formData);
    alert('Thank you! We will contact you soon.');
    this.formData = { name: '', phone: '', message: '' };
  }
}
