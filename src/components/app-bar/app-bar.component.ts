import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-bar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './app-bar.component.html',
  styleUrls: ['./app-bar.component.scss'],
  animations: [
    trigger('dropdownAnimation', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(-10px)' }),
        animate('200ms ease-in', style({ opacity: 1, transform: 'translateY(0)' }))
      ]),
      transition(':leave', [
        animate('200ms ease-out', style({ opacity: 0, transform: 'translateY(-10px)' }))
      ])
    ])
  ]
})
export class AppBarComponent {
  title = 'PIXAR';
  logoUrl = 'https://images.squarespace-cdn.com/content/v1/60241cb68df65b530cd84d95/1613495438818-408JDVSTB7NWSHVC20M7/logo.png?format=1500w'; 
  
  menuItems = [
    { name: 'FILMS' },
    { name: 'TECHNOLOGY' },
    { name: 'CAREERS' },
    { name: 'MORE' }
  ];
  
  activeDropdown: string | null = null;
  private dropdownTimeout: any;
  
  showDropdown(menuName: string) {
    if (this.dropdownTimeout) {
      clearTimeout(this.dropdownTimeout);
    }
    this.activeDropdown = menuName;
  }
  
  hideDropdown() {
    this.dropdownTimeout = setTimeout(() => {
      this.activeDropdown = null;
    }, 100);
  }
}