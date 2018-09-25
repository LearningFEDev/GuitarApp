import { Component, OnInit } from '@angular/core';
import {MusicService} from './music.service'
import {Observable} from 'rxjs/src'

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  constructor(private service:MusicService) { }
data=[];
displayData=[];
ngOnInit() {
	this.service.dataString$.subscribe(res=>{this.data=res;

		
		})
		}

	ngDoCheck(){
	}

}

