import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-short-films',
  imports: [CommonModule],
  templateUrl: './short-films.component.html',
  styleUrl: './short-films.component.scss'
})
export class ShortFilmsComponent {
  films = [
    {
      title: 'Float',
      year: '2019',
      poster: 'https://images.squarespace-cdn.com/content/v1/60241cb68df65b530cd84d95/1713896617440-JFMIAMD5GJ1M4UDZRGIZ/carls.jpg?format=500w',
      link: '/float'
    },
    {
      title: 'Piper',
      year: '2016',
      poster: 'https://images.squarespace-cdn.com/content/v1/60241cb68df65b530cd84d95/1713897070603-DQFGL1CBLA32TKFDIHGA/ciao.jpg?format=500w',
      link: '/piper'
    },
    {
      title: 'Lava',
      year: '2014',
      poster: 'https://images.squarespace-cdn.com/content/v1/60241cb68df65b530cd84d95/1713896243173-K7TUSNO4HIV9XK6K4REK/22.jpg?format=500w',
      link: '/lava'
    },
    {
      title: 'The Blue Umbrella',
      year: '2013',
      poster: 'https://images.squarespace-cdn.com/content/v1/60241cb68df65b530cd84d95/1713896100113-U30X3J5FWKRCMO54A424/lamp2.jpg?format=500w',
      link: '/blue-umbrella'
    },
    {
      title: 'La Luna',
      year: '2011',
      poster: 'https://images.squarespace-cdn.com/content/v1/60241cb68df65b530cd84d95/1713895976407-QDWU70CR9BCG7581EZ8V/bao2.jpg?format=500w',
      link: '/la-luna'
    },
    {
      title: 'Float',
      year: '2019',
      poster: 'https://images.squarespace-cdn.com/content/v1/60241cb68df65b530cd84d95/1713896914605-LPCUHOCMNG32I3VOUBTH/fritter_poster.jpg?format=500w',
      link: '/float'
    },
    {
      title: 'Piper',
      year: '2016',
      poster: 'https://images.squarespace-cdn.com/content/v1/60241cb68df65b530cd84d95/1667339142877-4W5N4XOPNNLOK89H7HVZ/c920_3cs.sel16.114.jpg?format=1500w',
      link: '/piper'
    },
    {
      title: 'Lava',
      year: '2014',
      poster: 'https://images.squarespace-cdn.com/content/v1/60241cb68df65b530cd84d95/1713895782548-HBSVPSSLTPCSRLIH7M5O/lou2.jpg?format=500w',
      link: '/lava'
    },
    {
      title: 'The Blue Umbrella',
      year: '2013',
      poster: 'https://images.squarespace-cdn.com/content/v1/60241cb68df65b530cd84d95/1713895733760-XX8OOQC3SBI8VM2HIKZ2/auntie.jpg?format=500w',
      link: '/blue-umbrella'
    },
    {
      title: 'La Luna',
      year: '2011',
      poster: 'https://images.squarespace-cdn.com/content/v1/60241cb68df65b530cd84d95/1713895668349-NU4PYBRIFCX082JHGD6Y/piper_poster.jpg?format=500w',
      link: '/la-luna'
    }
  ];
}
