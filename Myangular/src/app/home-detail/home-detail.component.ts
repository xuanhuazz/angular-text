import { Component, OnInit,Input } from '@angular/core';

//引入类型文件
import {Homesx} from '../homesx/homesx' 
@Component({
  selector: 'app-home-detail',
  templateUrl: './home-detail.component.html',
  styleUrls: ['./home-detail.component.scss']
})

export class HomeDetailComponent implements OnInit {

  @Input() home?: Homesx;   //接收数据需要用@Input()
  constructor() { }

  ngOnInit(): void {
  }

}
