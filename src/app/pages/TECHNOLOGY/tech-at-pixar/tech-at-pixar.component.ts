import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-tech-at-pixar',
  imports: [CommonModule, RouterModule],
  templateUrl: './tech-at-pixar.component.html',
  styleUrl: './tech-at-pixar.component.scss'
})
export class TechAtPixarComponent {
  expandedDropdowns: { [key: string]: boolean } = {};

  technologies = [
    {
      title: 'RenderMan',
      description: 'RenderMan®, the renowned Academy Award®-winning rendering technology by Pixar, stands as an industry-leading tool embraced by animation and visual effects professionals worldwide. Known for its ability to bring stunning imagery to life, RenderMan enables production pipelines to achieve unrivaled flexibility, scalability, and versatility.',
      link: '/renderman',
      image: 'https://images.squarespace-cdn.com/content/v1/60241cb68df65b530cd84d95/6d9890b9-6edf-4e16-a513-ff3f748074e9/Luca-Sea-Monster-First-Pixel-01.gif?format=2500w'
    },
    {
      title: 'OpenUSD',
      description: 'Developed by Pixar, Universal Scene Description (OpenUSD) is the first open-source software that can robustly and scalably interchange 3D scenes that may be composed of many different assets, sources, and animations, while fostering highly collaborative workflows.',
      link: '/openusd',
    },
    {
      title: 'Software Research & Development',
      description: 'At Pixar, we have a dynamic and dedicated team of technology experts working tirelessly to revolutionize our filmmaking. Our teams stand at the forefront of the production pipeline, developing a diverse range of applications and software tailored to meet the unique requirements of artists.',
      link: '/software-rd',
      image: 'https://images.squarespace-cdn.com/content/v1/60241cb68df65b530cd84d95/e1006fbb-d434-445d-bb6f-d2ee45e8c8cc/Hayley_03.jpg?format=1000w',
      hasDropdowns: true,
      dropdowns: [
        {
          title: 'Applications',
          content: 'As a crucial part of the production pipeline, our Applications team develops diverse applications and software that cater to the unique requirements of artists, spanning from asset creation to shot production.'
        },
        {
          title: 'Core',
          content: 'Our Core team pioneers cutting edge technologies to enhance efficiency and speed, empowering filmmakers with groundbreaking solutions.'
        },
        {
          title: 'Research',
          content: 'Our Research team is responsible for formulating long-term strategies to address the technological needs of our films, determining whether existing technology is sufficient or if further development is required.'
        },
        {
          title: 'Foundation',
          content: 'Our Foundation team acts as the digital guardians, ensuring seamless access and smooth operation of all assets in the library while meticulously testing and validating software releases for flawless performance.'
        }
      ]
    },
  ];

  toggleDropdown(dropdownKey: string): void {
    this.expandedDropdowns[dropdownKey] = !this.expandedDropdowns[dropdownKey];
  }

  isDropdownExpanded(dropdownKey: string): boolean {
    return !!this.expandedDropdowns[dropdownKey];
  }
}
