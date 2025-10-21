import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-faqs',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './faqs.component.html',
  styleUrls: ['./faqs.component.scss']
})
export class FaqsComponent {
  faqs = [
    {
      question: 'I have a great idea for a Pixar movie. Can I send it to you?',
      answer: 'Pixar does not accept any kind of creative submission. All of Pixar’s ideas and stories are developed internally and it is our policy not to look at any external submissions. For legal reasons we do not consider any creative material (scripts, synopses, sketches, etc.) sent to us unsolicited.',
      expanded: false
    },
    {
      question: 'When was Pixar established?',
      answer: 'Pixar was established on February 3, 1986.',
      expanded: false
    },
    {
      question: 'Can the public tour the Pixar facility?',
      answer: 'Due to production demands and confidentiality issues, we are a closed studio and do not offer tours.',
      expanded: false
    },
    {
      question: 'I am working on a school project. Can I interview someone from Pixar or will you please send me materials that I can use as part of a presentation?',
      answer: 'We receive a large number of requests for information in connection with student projects; unfortunately, we are not able to respond to each one individually. This website, however, contains answers to many of the most commonly asked questions about Pixar, our employees, the work that is done at our studio, and information about the animation industry as a whole.',
      expanded: false
    },
    {
      question: 'What is Pixar\'s policy or practice for donations, scholarships, or charities?',
      answer: 'Pixar supports various charitable causes and educational initiatives. However, we are not able to fulfill all requests for donations or sponsorships. Please check our official channels for current programs.',
      expanded: false
    },
    {
      question: 'Does Pixar participate in a Supplier Diversity program?',
      answer: 'Yes, Pixar is committed to supplier diversity and works with businesses owned by minorities, women, veterans, and other diverse groups as part of our procurement process.',
      expanded: false
    },
    {
      question: 'Where do I ask a general investor question about The Walt Disney Company?',
      answer: 'Please visit Disney Investor Relations online.',
      expanded: false
    }
  ];

  toggleFaq(index: number): void {
    this.faqs[index].expanded = !this.faqs[index].expanded;
  }
}