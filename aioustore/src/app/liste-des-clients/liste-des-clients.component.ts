import { Component, OnInit } from '@angular/core';
import { restoservice } from '../resto.service';
@Component({
  selector: 'app-liste-des-clients',
  templateUrl: './liste-des-clients.component.html',
  styleUrls: ['./liste-des-clients.component.css']
})
export class ListeDesClientsComponent implements OnInit {

  constructor(private resto: restoservice) { }
  collection: any = [];

  ngOnInit(): void {
    this.resto.getList().subscribe((result) => {
      console.warn(result)
      this.collection = result
    })
  }
  deleteresto(item : any) {
    this.collection.splice(item - 1, 1)
    this.resto.deleteresto(item).subscribe((result) => {
      console.warn("result", result)
    })
  }
}
