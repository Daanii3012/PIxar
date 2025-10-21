import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-renderman',
  imports: [CommonModule, RouterModule],
  templateUrl: './renderman.component.html',
  styleUrl: './renderman.component.scss'
})
export class RendermanComponent {
  expandedDropdowns: { [key: string]: boolean } = {};

  renderManHistory = [
    {
      year: '1989',
      milestone: 'RenderMan Development Begins',
      description: 'Pixar begins development of RenderMan, envisioning a revolutionary rendering system that would change computer graphics forever.'
    },
    {
      year: '1995',
      milestone: 'Toy Story Success',
      description: 'RenderMan powers the world\'s first fully computer-animated feature film, proving that photorealistic 3D animation is possible.'
    },
    {
      year: '2001',
      milestone: 'Academy Award',
      description: 'RenderMan receives the Academy Award for Technical Achievement, recognizing its contribution to the film industry.'
    },
    {
      year: '2024',
      milestone: 'Latest Innovation',
      description: 'RenderMan continues to evolve with cutting-edge path tracing, AI denoising, and cloud rendering capabilities.'
    }
  ];

  technicalFeatures = [
    {
      category: 'Rendering Algorithms',
      features: [
        'Monte Carlo Path Tracing',
        'Bidirectional Path Tracing', 
        'Photon Mapping',
        'Adaptive Sampling'
      ]
    },
    {
      category: 'Material System',
      features: [
        'Physically Based BSDF',
        'Layered Materials',
        'Subsurface Scattering',
        'Volume Shaders'
      ]
    }
  ];

  toggleDropdown(dropdownKey: string): void {
    this.expandedDropdowns[dropdownKey] = !this.expandedDropdowns[dropdownKey];
  }

  isDropdownExpanded(dropdownKey: string): boolean {
    return !!this.expandedDropdowns[dropdownKey];
  }
}
