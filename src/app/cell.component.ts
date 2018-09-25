import { Component, OnInit, Input } from '@angular/core';
import {MusicService} from './music.service'
import {Observable} from 'rxjs/src'

@Component({
  selector: 'app-cell',
  templateUrl: './cell.component.html',
  styleUrls: ['./cell.component.css']
})
export class CellComponent implements OnInit {

  constructor(private service:MusicService) { }

@Input() display;

musicData
  ngOnInit() {
  this.service.getData().subscribe(res=>{this.musicData=res.json();
  	console.log(this.musicData)})
  }

}
