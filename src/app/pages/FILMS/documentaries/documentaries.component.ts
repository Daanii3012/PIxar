import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-documentaries',
  imports: [CommonModule],
  templateUrl: './documentaries.component.html',
  styleUrl: './documentaries.component.scss'
})
export class DocumentariesComponent {
  films = [
    {
      title: 'Pixar in Real Life',
      year: '2019',
      poster: 'https://images.squarespace-cdn.com/content/v1/60241cb68df65b530cd84d95/1741804187500-NJ4L46F3FYQTTMXRCYGC/mtp2.jpg?format=500w',
      link: '/pixar-in-real-life'
    },
    {
      title: 'Science Fair',
      year: '2018',
      poster: 'https://images.squarespace-cdn.com/content/v1/60241cb68df65b530cd84d95/1741630718554-6861LD7WRS984JMNBAB1/good.jpg?format=500w',
      link: '/science-fair'
    },
    {
      title: 'The Pixar Story',
      year: '2007',
      poster: 'https://images.squarespace-cdn.com/content/v1/60241cb68df65b530cd84d95/1741630701870-X2JJ4GIPN7C078MBJD34/beyond.jpg?format=500w',
      link: '/pixar-story'
    },
    {
      title: 'Elio',
      year: '2025',
      poster: 'https://images.squarespace-cdn.com/content/v1/60241cb68df65b530cd84d95/1741630702184-QO1KP9RX742XWR0RAWSW/embrace.jpg?format=500w',
      link: '/elio'
    },
    {
      title: 'Lightyear Origins',
      year: '2022',
      poster: 'https://images.squarespace-cdn.com/content/v1/60241cb68df65b530cd84d95/1741630733087-JMBLWZUSGEN6FUKZRARR/spark.jpg?format=500w',
      link: '/lightyear-origins'
    },
    {
      title: 'Monsters University',
      year: '2013',
      poster: 'https://images.squarespace-cdn.com/content/v1/60241cb68df65b530cd84d95/1741630718698-0FHWPEL2KR267T2YNW06/inside.jpg?format=500w',
      link: '/monsters-university'
    }
  ];
}
