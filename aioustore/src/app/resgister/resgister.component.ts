import { Component, OnInit} from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Subscriber } from 'rxjs';
import { restoservice } from '../resto.service';

@Component({
  selector: 'app-resgister',
  templateUrl: './resgister.component.html', 
  styleUrls: ['./resgister.component.css']
})
export class ResgisterComponent implements OnInit {

  addresto = new FormGroup ({
    name : new FormControl(''),
    email : new FormControl(''),
    password  : new FormControl('') 
  })

  
  constructor(private resto:restoservice) { }

  ngOnInit(): void {
  }collectResto()
  {
    this.resto.saveResto(this.addresto.value).subscribe((result)=>{console.warn("result:",result)}) 

    console.log(this.addresto.value)
  }
}
