import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-openusd',
  imports: [CommonModule],
  templateUrl: './openusd.component.html',
  styleUrl: './openusd.component.scss'
})
export class OpenusdComponent {
  currentSlide = 0;
  
  slides = [
    { 
      image: 'https://images.squarespace-cdn.com/content/v1/60241cb68df65b530cd84d95/1714682449822-BZA64NGADBZ6YGS7VXPS/b002_118e_pub.pub16.2086.jpg?format=2500w',
      alt: 'Luca Sea Monster'
    },
    { 
      image: 'https://images.squarespace-cdn.com/content/v1/60241cb68df65b530cd84d95/1714682451929-C2BI4R0K0FPY3UPJFCX0/p464_1f_cs.sel16.101.jpg?format=2500w',
      alt: 'RenderMan Scene'
    },
    { 
      image: 'https://images.squarespace-cdn.com/content/v1/60241cb68df65b530cd84d95/1714682452929-YO9AO5VIHEBW60TB5GJC/s008_102T_cs.sel16.649.jpg?format=2500w',
      alt: 'Scene Render'
    },
    { 
      image: 'https://images.squarespace-cdn.com/content/v1/60241cb68df65b530cd84d95/1714682450872-EQ8P7LFHQGUS1O1ZHQQ9/c330_13tTcs.sel16.110.jpg?format=2500w',
      alt: 'Lama Stirling'
    },
    { 
      image: 'https://images.squarespace-cdn.com/content/v1/60241cb68df65b530cd84d95/1714683210330-JL4V2MZYFDBFIT04HUNA/nemo2.jpg?format=2500w',
      alt: 'RenderMan Header'
    },
      { 
      image: 'https://images.squarespace-cdn.com/content/v1/60241cb68df65b530cd84d95/1714683210281-708BDZ02FRE0RS5BQM1B/red2.jpg?format=2500w',
      alt: 'RenderMan Header'
    }
  ];

  nextSlide() {
    this.currentSlide = (this.currentSlide + 1) % this.slides.length;
  }
}
