import { Component, OnInit } from '@angular/core';
import {MusicService} from './music.service'
import {ActivatedRoute} from '@angular/router'

@Component({
  selector: 'app-g-data',
  templateUrl: './g-data.component.html',
  styleUrls: ['./g-data.component.css']
})
export class GDataComponent implements OnInit {

  constructor(private service:MusicService,private route:ActivatedRoute) { }
data;
detail=[];
id;
  ngOnInit() {
  	this.service.getData().subscribe(res=>{this.data=res.json();
  		if(this.data){
  			this.route.paramMap.subscribe(params=>{
  				this.id=params.get('Item')
  				for(let i=0;i<this.data.length;i++){
  					if(this.data[i].ItemNum==this.id){
  						this.detail=this.data[i]
  					}
  				}
  			})
  		}
  	})
  }
count=1;
  add(rf){
  if(this.count>9){
    window.alert("For large orders, please contact the store.")
    rf.disabled;
    }else{
        this.count+=1
    }
  }

  subtract(lf){
    if(this.count<2){
    window.alert("Minimum order is one item.")
    lf.disabled;
    }else{
        this.count-=1
    }
  }

  sendInfo(){
    this.service.recieveCartData(this.detail,this.count)
  }

}