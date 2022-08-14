import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-detail-bill-boards',
  templateUrl: './detail-bill-boards.component.html',
  styleUrls: ['./detail-bill-boards.component.css']
})
export class DetailBillBoardsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  onFileSelected(event : any){
    console.log(event);
  }
}
