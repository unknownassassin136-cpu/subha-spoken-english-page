import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-testimonials',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './testimonials.component.html',
  styleUrl: './testimonials.component.css'
})
export class TestimonialsComponent {
  testimonials = [
    {
      name: 'Rajesh Kumar',
      role: 'Software Engineer',
      location: 'Amalapuram',
      rating: 5,
      text: 'After joining SUBHA SPOKEN ENGLISH, my confidence in speaking English has improved dramatically. Suresh Sir\'s teaching method is excellent. I cleared my interview and got placed in a top IT company!'
    },
    {
      name: 'Sneha Reddy',
      role: 'Bank Employee',
      location: 'Kakinada',
      rating: 5,
      text: 'The practical approach at SUBHA SPOKEN ENGLISH helped me overcome my stage fear. The interview preparation sessions were extremely helpful. Highly recommended for anyone looking to improve their communication skills.'
    },
    {
      name: 'Prasad Rao',
      role: 'Marketing Manager',
      location: 'Rajahmundry',
      rating: 5,
      text: 'I was always hesitant to speak in English. Thanks to Suresh Sir and the supportive environment at the institute, I now speak confidently in meetings and presentations. Worth every penny!'
    },
    {
      name: 'Lakshmi Priya',
      role: 'Student',
      location: 'Amalapuram',
      rating: 5,
      text: 'The personality development sessions have transformed me completely. My vocabulary and pronunciation have improved significantly. Suresh Sir is very patient and supportive.'
    },
    {
      name: 'Anil Kumar',
      role: 'Teacher',
      location: 'Mukhathalam',
      rating: 5,
      text: 'As a teacher, communication is key. SUBHA SPOKEN ENGLISH helped me enhance my English speaking skills. The daily practice sessions and interactive learning made all the difference.'
    },
    {
      name: 'Divya Sri',
      role: 'College Student',
      location: 'Amalapuram',
      rating: 5,
      text: 'The morning batch timing was perfect for students like me. I can now speak fluent English and have gained confidence for campus placements. Thank you Suresh Sir!'
    }
  ];
}
