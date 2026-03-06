import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './services.component.html',
  styleUrl: './services.component.css'
})
export class ServicesComponent {
  activeCategory = 'communication';
  
  categories = [
    { id: 'communication', label: 'Communication Training' },
    { id: 'career', label: 'Career & Professional' },
    { id: 'personal', label: 'Personal Development' }
  ];
  
  services: { [key: string]: { icon: string; title: string; desc: string }[] } = {
    communication: [
      { icon: '💬', title: 'Spoken English Training', desc: 'Master fluent English speaking with practical lessons' },
      { icon: '🔊', title: 'Pronunciation Improvement', desc: 'Perfect your accent and pronunciation skills' },
      { icon: '📚', title: 'Vocabulary Development', desc: 'Build a strong vocabulary for professional use' },
      { icon: '👂', title: 'Listening Practice', desc: 'Improve comprehension with interactive exercises' },
      { icon: '🗣️', title: 'Conversational Practice', desc: 'Real-world speaking sessions with peers' }
    ],
    career: [
      { icon: '💼', title: 'Interview Preparation', desc: 'Ace your interviews with confidence' },
      { icon: '🏢', title: 'Professional Communication', desc: 'Business English for workplace success' },
      { icon: '💪', title: 'Confidence Building', desc: 'Overcome hesitation and speak boldly' }
    ],
    personal: [
      { icon: '🌟', title: 'Personality Development', desc: 'Transform your overall personality' },
      { icon: '🎤', title: 'Public Speaking', desc: 'Speak confidently in gatherings' },
      { icon: '😰', title: 'Stage Fear Reduction', desc: 'Overcome fear of public speaking' },
      { icon: '🚀', title: 'Motivational Guidance', desc: 'Stay motivated throughout your journey' }
    ]
  };
  
  setCategory(category: string) {
    this.activeCategory = category;
  }
}
