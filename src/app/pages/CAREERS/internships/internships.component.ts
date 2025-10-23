import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-internships',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './internships.component.html',
  styleUrl: './internships.component.scss'
})
export class InternshipsComponent {
  dropdowns = {
    productionFacing: false,
    curriculumBased: false,
    softwareDevelopment: false,
    technicalPipeline: false,
    businessDevelopment: false,
    marketingCommunications: false,
    focusAreas: false
  };

  toggleDropdown(dropdownName: keyof typeof this.dropdowns): void {
    const isOpen = this.dropdowns[dropdownName];
    Object.keys(this.dropdowns).forEach(key => {
      this.dropdowns[key as keyof typeof this.dropdowns] = false;
    });
    if (!isOpen) {
      this.dropdowns[dropdownName] = true;
    }
  }
}