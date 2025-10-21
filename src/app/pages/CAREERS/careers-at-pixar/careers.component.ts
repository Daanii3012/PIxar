import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-careers',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './careers.component.html',
  styleUrl: './careers.component.scss'
})
export class CareersComponent {
  openFaq: number | null = null;

  toggleFaq(faqNumber: number) {
    this.openFaq = this.openFaq === faqNumber ? null : faqNumber;
  }
}