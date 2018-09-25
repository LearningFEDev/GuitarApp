import { Component, OnInit } from '@angular/core';
import {MusicService} from './music.service'
import {Observable} from 'rxjs/src'
@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  constructor(private service:MusicService) { }

musicData
  ngOnInit() {
  this.service.getData().subscribe(res=>{this.musicData=res.json();})
  }

}
