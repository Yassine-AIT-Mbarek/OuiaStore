import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-buy',
  templateUrl: './buy.component.html',
  styleUrls: ['./buy.component.css']
})
export class BuyComponent implements OnInit {

  constructor( private router:Router) { }

  ngOnInit(): void {
  }
  
  public btn2 () {
    this.router.navigateByUrl('/detail-b');
  } ;
  public btn3 () {
    this.router.navigateByUrl('/detail-f');
  } 
  public btnza () {
    this.router.navigateByUrl('/detail');
  } ;
}
