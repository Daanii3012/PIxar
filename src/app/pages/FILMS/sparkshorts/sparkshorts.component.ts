import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sparkshorts',
  imports: [CommonModule],
  templateUrl: './sparkshorts.component.html',
  styleUrl: './sparkshorts.component.scss'
})
export class SparkshortsComponent {
  films = [
    {
      title: 'Twenty Something',
      year: '2021',
      poster: 'https://images.squarespace-cdn.com/content/v1/60241cb68df65b530cd84d95/1713823442580-IOPQ2BS91U5DEOQ268PI/Insideout2.jpg?format=300w',
      link: '/twenty-something'
    },
    {
      title: 'Burrow',
      year: '2020',
      poster: 'https://images.squarespace-cdn.com/content/v1/60241cb68df65b530cd84d95/60138672-6fc9-4b3f-84d3-f43ae3eb5db9/20240319InsideOut2CameraGammaStage02.jpeg-0.jpg?format=1500w',
      link: '/burrow'
    },
    {
      title: 'Out',
      year: '2020',
      poster: 'https://images.squarespace-cdn.com/content/v1/60241cb68df65b530cd84d95/bc0bae10-d124-40a9-ac52-da720c261538/Technology-Careers2.jpg?format=1500w',
      link: '/out'
    },
    {
      title: 'Purl',
      year: '2018',
      poster: 'https://images.squarespace-cdn.com/content/v1/60241cb68df65b530cd84d95/5fcfc8d9-b4b8-4c40-9348-4e076bebb4a1/20180308Incredibles2ArtGallery14_opt.JPG-0.jpg?format=1500w',
      link: '/purl'
    },
    {
      title: 'Kitbull',
      year: '2019',
      poster: 'https://images.squarespace-cdn.com/content/v1/60241cb68df65b530cd84d95/8ee963a5-7f79-4f53-aeb1-8213ba691bce/serafian.jpg?format=2500w',
      link: '/kitbull'
    },
    {
      title: 'Float',
      year: '2019',
      poster: 'https://images.squarespace-cdn.com/content/v1/60241cb68df65b530cd84d95/4b6d7fd7-53ff-47e0-b5cc-1760ffa601a0/3.jpg?format=2500w',
      link: '/float'
    },
    {
      title: 'Wind',
      year: '2019',
      poster: 'https://images.squarespace-cdn.com/content/v1/60241cb68df65b530cd84d95/40f91269-c3ad-4115-bf40-03ce0dd0d83f/it2.jpg?format=2500w',
      link: '/wind'
    },
    {
      title: 'Loop',
      year: '2020',
      poster: 'https://images.squarespace-cdn.com/content/v1/60241cb68df65b530cd84d95/2e04b8a5-8f86-4407-8c8f-7b50865df371/4.jpg?format=2500w',
      link: '/loop'
    },
    {
      title: 'Smash and Grab',
      year: '2019',
      poster: 'https://images.squarespace-cdn.com/content/v1/60241cb68df65b530cd84d95/ba9b9e04-b48d-4cdd-9e39-c59cd659b067/2.jpg?format=2500w',
      link: '/smash-and-grab'
    },
    {
      title: 'Nona',
      year: '2021',
      poster: 'https://images.squarespace-cdn.com/content/v1/60241cb68df65b530cd84d95/8161f3cb-9f73-4053-b03d-77e260ac5c71/story2.jpg?format=1000w',
      link: '/nona'
    }
  ];
}
