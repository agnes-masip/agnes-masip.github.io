import { animate, stagger, query, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [
    trigger('fade', [
      state('void', style({opacity: 0})),
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(10px)' }),
        animate('500ms', style({ opacity: 1, transform: 'translateY(0)' })),
      ]),
      transition(':leave', [
        animate('500ms', style({ opacity: 0, transform: 'translateY(10px)' })),
      ]),
        
    ]),
    trigger('shake',[
      transition('* => *', [
         
            
        animate(1000)
            
      ])
    ])
    
  ]
})
export class HomeComponent implements OnInit {
  panelOpenState = false;

  selectedBackend: string = 'Deployment';
  img1: string = '../../../assets/img/aws.png';
  img2: string = '../../../assets/img/heroku.png';
  img3: string = '../../../assets/img/docker.png';

  //event handler for the select element's change event
  selectChangeHandler (event: any) {
    //update the ui
    this.selectedBackend = event.target.value;
    if(event.target.value == 'Code'){
      this.img1 = '../../../assets/img/node.png';
      this.img2 = '../../../assets/img/express.png';
      this.img3 = '';
    }else if(event.target.value == 'Deployment'){
      this.img1 = '../../../assets/img/aws.png';
      this.img2 = '../../../assets/img/heroku.png';
      this.img3 = '../../../assets/img/docker.png';
    }else if(event.target.value == 'Databases'){
      this.img1 = '../../../assets/img/sqlite.png';
      this.img2 = '../../../assets/img/firebase.png';
      this.img3 = '../../../assets/img/mongo.jpg';
    }else if(event.target.value == 'Documentation'){
      this.img1 = '../../../assets/img/postman.png';
      this.img2 = '../../../assets/img/openapi.png';
      this.img3 = '../../../assets/img/swagger.png';
    }else if(event.target.value == 'Testing'){
      this.img1 = '../../../assets/img/mocha.png';
      this.img2 = '../../../assets/img/chai.jpg';
      this.img3 = '../../../assets/img/junit.png';
    }
  }
 

  FVImages: Array<object> = [{
    image: '../../../assets/img/fv.jpg',
    thumbImage: '../../../assets/img/fv.jpg',
    title: 'backend website',
  },{
    image: '../../../assets/img/attendify.png',
    thumbImage: '../../../assets/img/attendify.png',
    title: 'Livestream platform',
  },{
    image: '../../../assets/img/presfv.jpg',
    thumbImage: '../../../assets/img/presfv.jpg',
    title: 'Non-online fair',
  }];

  OFFHomeImages: Array<object> = [{
    image: '../../../assets/img/off1.png',
    thumbImage: '../../../assets/img/off1.png',
    title: 'frontend',
  },{
    image: '../../../assets/img/offpostman.png',
    thumbImage: '../../../assets/img/offpostman.png',
    title: 'Postman to communicate API with Front',
  },
  {
    image: '../../../assets/img/monitor.png',
    thumbImage: '../../../assets/img/monitor.png',
    title: 'Monitor for the API deployed in AWS',
  }];

  HackerNewsImages: Array<object> = [{
    image: '../../../assets/img/off1.png',
    thumbImage: '../../../assets/img/off1.png',
    title: 'Main Noticies',
  },{
    image: '../../../assets/img/offpostman.png',
    thumbImage: '../../../assets/img/offpostman.png',
    title: 'Form',
  },
  {
    image: '../../../assets/img/monitor.png',
    thumbImage: '../../../assets/img/monitor.png',
    title: 'React Version',
  }];

  


  constructor() { }

  ngOnInit(): void {
  }




  
}


