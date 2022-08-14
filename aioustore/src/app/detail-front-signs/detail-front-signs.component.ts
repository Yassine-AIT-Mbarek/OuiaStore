import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-detail-front-signs',
  templateUrl: './detail-front-signs.component.html',
  styleUrls: ['./detail-front-signs.component.css']
})
export class DetailFrontSignsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  onFileSelected(event : any){
    console.log(event);
  }
}
