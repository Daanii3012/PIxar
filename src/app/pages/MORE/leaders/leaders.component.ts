import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-leaders',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './leaders.component.html',
  styleUrls: ['./leaders.component.scss']
})
export class LeadersComponent {
  
  
  leadershipRows = [
    [
      {
        name: 'Jonathan Garson',
        title: 'General Manager',
        image: 'https://images.squarespace-cdn.com/content/v1/60241cb68df65b530cd84d95/c508f8d2-b4eb-4215-8868-181b03f70921/garson.jpg?format=2500w',
        isSenior: false
      },
      {
        name: 'Ken Hinoki',
        title: 'Vice President, Production Finance',
        image: 'https://images.squarespace-cdn.com/content/v1/60241cb68df65b530cd84d95/9c461868-94c9-4924-86a8-dfc1caccbd9b/20230823KenHinoki01-1.jpg?format=2500w',
        isSenior: false
      },
      {
        name: 'Reema Batnagar',
        title: 'Vice President, People',
        image: 'https://images.squarespace-cdn.com/content/v1/60241cb68df65b530cd84d95/153683ae-5b28-4a57-927a-fdafc85e1bc4/rema2.jpg?format=2500w',
        isSenior: false
      },
      {
        name: 'Lindsey Collins',
        title: 'Senior Vice President, Development',
        image: 'https://images.squarespace-cdn.com/content/v1/60241cb68df65b530cd84d95/2d7d9f92-f526-40c9-9e79-71246d75c3c6/collins.jpg?format=2500w',
        isSenior: false
      },
      {
        name: 'Serena Martinez Dettman',
        title: 'Assistant Chief Counsel',
        image: 'https://images.squarespace-cdn.com/content/v1/60241cb68df65b530cd84d95/f0b5cef7-fe32-4fc3-96eb-bd677788d1bd/20250805_SerenaMartinezDettman_02.jpg?format=2500w',
        isSenior: false
      },
      {
        name: 'Tyler Fazakerley',
        title: 'Vice President, Systems',
        image: 'https://images.squarespace-cdn.com/content/v1/60241cb68df65b530cd84d95/686f45a4-66a6-4ac9-82bb-5c2315c37acf/20230110TylerFazakerley01.jpg?format=2500w',
        isSenior: false
      }
    ],
    [
      {
        name: 'Jonathan Garson',
        title: 'General Manager',
        image: 'https://images.squarespace-cdn.com/content/v1/60241cb68df65b530cd84d95/c508f8d2-b4eb-4215-8868-181b03f70921/garson.jpg?format=2500w',
        isSenior: false
      },
      {
        name: 'Ken Hinoki',
        title: 'Vice President, Production Finance',
        image: 'https://images.squarespace-cdn.com/content/v1/60241cb68df65b530cd84d95/9c461868-94c9-4924-86a8-dfc1caccbd9b/20230823KenHinoki01-1.jpg?format=2500w',
        isSenior: false
      },
      {
        name: 'Reema Batnagar',
        title: 'Vice President, People',
        image: 'https://images.squarespace-cdn.com/content/v1/60241cb68df65b530cd84d95/153683ae-5b28-4a57-927a-fdafc85e1bc4/rema2.jpg?format=2500w',
        isSenior: false
      },
      {
        name: 'Lindsey Collins',
        title: 'Senior Vice President, Development',
        image: 'https://images.squarespace-cdn.com/content/v1/60241cb68df65b530cd84d95/2d7d9f92-f526-40c9-9e79-71246d75c3c6/collins.jpg?format=2500w',
        isSenior: false
      },
      {
        name: 'Serena Martinez Dettman',
        title: 'Assistant Chief Counsel',
        image: 'https://images.squarespace-cdn.com/content/v1/60241cb68df65b530cd84d95/f0b5cef7-fe32-4fc3-96eb-bd677788d1bd/20250805_SerenaMartinezDettman_02.jpg?format=2500w',
        isSenior: false
      },
      {
        name: 'Tyler Fazakerley',
        title: 'Vice President, Systems',
        image: 'https://images.squarespace-cdn.com/content/v1/60241cb68df65b530cd84d95/686f45a4-66a6-4ac9-82bb-5c2315c37acf/20230110TylerFazakerley01.jpg?format=2500w',
        isSenior: false
      }
    ],[
      {
        name: 'Jonathan Garson',
        title: 'General Manager',
        image: 'https://images.squarespace-cdn.com/content/v1/60241cb68df65b530cd84d95/c508f8d2-b4eb-4215-8868-181b03f70921/garson.jpg?format=2500w',
        isSenior: false
      },
      {
        name: 'Ken Hinoki',
        title: 'Vice President, Production Finance',
        image: 'https://images.squarespace-cdn.com/content/v1/60241cb68df65b530cd84d95/9c461868-94c9-4924-86a8-dfc1caccbd9b/20230823KenHinoki01-1.jpg?format=2500w',
        isSenior: false
      },
      {
        name: 'Reema Batnagar',
        title: 'Vice President, People',
        image: 'https://images.squarespace-cdn.com/content/v1/60241cb68df65b530cd84d95/153683ae-5b28-4a57-927a-fdafc85e1bc4/rema2.jpg?format=2500w',
        isSenior: false
      },
      {
        name: 'Lindsey Collins',
        title: 'Senior Vice President, Development',
        image: 'https://images.squarespace-cdn.com/content/v1/60241cb68df65b530cd84d95/2d7d9f92-f526-40c9-9e79-71246d75c3c6/collins.jpg?format=2500w',
        isSenior: false
      },
      {
        name: 'Serena Martinez Dettman',
        title: 'Assistant Chief Counsel',
        image: 'https://images.squarespace-cdn.com/content/v1/60241cb68df65b530cd84d95/f0b5cef7-fe32-4fc3-96eb-bd677788d1bd/20250805_SerenaMartinezDettman_02.jpg?format=2500w',
        isSenior: false
      },
      {
        name: 'Tyler Fazakerley',
        title: 'Vice President, Systems',
        image: 'https://images.squarespace-cdn.com/content/v1/60241cb68df65b530cd84d95/686f45a4-66a6-4ac9-82bb-5c2315c37acf/20230110TylerFazakerley01.jpg?format=2500w',
        isSenior: false
      }
    ],
  ];
}