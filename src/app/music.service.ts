import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http'
import {Observable} from 'rxjs/src'
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MusicService {

  constructor(private http:Http) { }
file;
  getData(){
  	this.file="../assets/guitarData.json"
  	return this.http.get(this.file)
  }

private dataStringSource= new BehaviorSubject();
dataString$=this.dataStringSource.asObservable();

item;
quantity;
packet=[];
  public recieveCartData(info,amount){
  	this.Item=info;
  	this.quantity=amount;
  	this.packet.push([{Name:this.Item.Name,"Number":this.Item.ItemNum, "Condition":"New","Stock":"In Stock & Ready to Ship", "Price": this.Item.Price, "Quantity":this.quantity, src:this.Item.src, total: (this.quantity*parseFloat(this.Item.Price)).toPrecision()}]);
  	this.dataStringSource.next(this.packet);
  }




}
