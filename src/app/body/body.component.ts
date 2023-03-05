import { Component, OnInit } from '@angular/core';
import {NgbCarouselConfig} from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css'],
  providers: [NgbCarouselConfig]
})
export class BodyComponent implements OnInit {
  showNavigationArrows = false;
  cards = [
    {
      title : 'Param 8000',
      description : "India wanted to purchase Cray X-MP supercomputer from USA in 1980s at $10 million to perform sceintific and defence-related operations. As USA denied the sale of Cray X-MP to India, India decied to develop indigenious computing technology. This led to the establishment of Centre for Development of Advanced Computing Technology (C-DACT) and India's first super computer Param 8000.\n A prototype of Param was benchmared at 1990 Zurich supercomping show, in which it stood second in all. Param came out to be 28 times more powerful than the Cray X-MP at relatively low price tag of $0.35 million. The entire 3 year project is estimated to have costed around $19.5 million to India to build C-DACT and Param. Param not only took over the home market of India, but was also exported to other countries like Germany, UK , Russia, etc."
      ,
      buttonText : "Architect of India's initiative in super computing: Vijay P Bhaktar",
      img : 'assets/param8000.png'
    },
    {
      title: "Mars Orbiter Mission(MOM)",
      description: "Mars Orbiter Mission (MOM)  was India's first interplanetary mission. India became the fourth space agency in the world to successfully send a spacecraft to Mars orbit. The mission Mangalyaan was planned for 6 months, MOM completed 7+ years in Mars orbit, before losing communication with Earth on 2nd October, 2022.It made India the first Asian nation to reach Martian orbit and also the first nation in the world to do it in it's maiden attempt.The total cost of the mission was approximately ₹450 Crores making it the least expensive Mars mission till date."
      ,
      buttonText: "India reached mars at  ₹7/km which is less than any taxi ride rate in most of Indian cities.",
      img: 'assets/mom.jpg'
    },
    {
      title: 'Card Title 3',
      description: 'Some quick example text to build on the card title and make up the bulk of the card content',
      buttonText: 'Button',
      img: 'assets/a.jpg'
    },
    {
      title: 'Card Title 4',
      description: 'Some quick example text to build on the card title and make up the bulk of the card content',
      buttonText: 'Button',
      img: 'assets/b.jpg'
    },

  ];
  constructor(config: NgbCarouselConfig) { 
    config.showNavigationArrows = true;
  }

  ngOnInit(): void {
  }

}
