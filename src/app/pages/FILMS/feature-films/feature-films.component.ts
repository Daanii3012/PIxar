import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Film } from '../../../models/film.model';

@Component({
  selector: 'app-feature-films',
  imports: [CommonModule],
  templateUrl: './feature-films.component.html',
  styleUrl: './feature-films.component.scss'
})
export class FeatureFilmsComponent {
  films: Film[] = [
    {
      title: 'Inside Out 2',
      year: '2024',
      poster: 'https://images.squarespace-cdn.com/content/v1/60241cb68df65b530cd84d95/1713823442580-IOPQ2BS91U5DEOQ268PI/Insideout2.jpg?format=300w',
      link: '/inside-out-2'
    },
    {
      title: 'Elemental',
      year: '2023',
      poster: 'https://images.squarespace-cdn.com/content/v1/60241cb68df65b530cd84d95/1713823862678-C0UEIE52UM9TGSEF6LK7/elemental.jpg?format=300w',
      link: '/elemental'
    },
    {
      title: 'Lightyear',
      year: '2022',
      poster: 'https://images.squarespace-cdn.com/content/v1/60241cb68df65b530cd84d95/1713824006149-IF1IZTO2EM2AF6XUMN4C/lightyear.jpg?format=300w',
      link: '/lightyear'
    },
    {
      title: 'Turning Red',
      year: '2022',
      poster: 'https://images.squarespace-cdn.com/content/v1/60241cb68df65b530cd84d95/1713824089444-VX279SECCBTF9YOVBMRD/turning_red.jpg?format=300w',
      link: '/turning-red'
    },
    {
      title: 'Luca',
      year: '2021',
      poster: 'https://images.squarespace-cdn.com/content/v1/60241cb68df65b530cd84d95/1713824139671-D9DAKEPKQFJJZ9VS6OOF/23_luca.jpg?format=300w',
      link: '/luca'
    },
    {
      title: 'Soul',
      year: '2020',
      poster: 'https://images.squarespace-cdn.com/content/v1/60241cb68df65b530cd84d95/1713824356445-IFFARPEJ7AICF8VNP41Z/20_i2.jpg?format=300w',
      link: '/soul'
    },
    {
      title: 'Onward',
      year: '2020',
      poster: 'https://images.squarespace-cdn.com/content/v1/60241cb68df65b530cd84d95/1713824235691-8G5E7ZMG19TWMEGUZLR7/onward.jpg?format=300w',
      link: '/onward'
    },
    {
      title: 'Toy Story 4',
      year: '2019',
      poster: 'https://images.squarespace-cdn.com/content/v1/60241cb68df65b530cd84d95/1713824305144-T48ZJVWCWRSIWQL137BA/21_ts4.jpg?format=300w',
      link: '/toy-story-4'
    },
    {
      title: 'Incredibles 2',
      year: '2018',
      poster: 'https://images.squarespace-cdn.com/content/v1/60241cb68df65b530cd84d95/1713824356445-IFFARPEJ7AICF8VNP41Z/20_i2.jpg?format=300w',
      link: '/incredibles-2'
    },
    {
      title: 'Coco',
      year: '2017',
      poster: 'https://images.squarespace-cdn.com/content/v1/60241cb68df65b530cd84d95/1713824400985-J31MP06K1WZFGORYTENN/19_coco.jpg?format=300w',
      link: '/coco'
    }
  ];
}
