import { Component, OnInit } from '@angular/core';
//引入依赖
import {HomeService} from '../home.service'
import { MessageService } from '../message.service';
import { Homesx } from '../homesx/homesx';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  home:Homesx[] = []
  homeName?:Homesx
  //展示姓名的方法，注意传参部分要加属性。
  displayName(h:any):void {
    this.homeName = h
    this.messageService.add(`我点击了${h.name}`)
  }
  //2.写一个方法，来获取到homeService中的数据
  //用Observable的话，这里要用subscribe，得到home
  getHome():void {
    this.homeService.getHome().subscribe(home => this.home = home)
  }
  

  //1.在构造函数中添加一个私有的homeService，类型为HomeService
  constructor(private homeService : HomeService,private messageService:MessageService) { }
  //3.在生命周期中调用此方法
  ngOnInit(): void {
    this.getHome()
  }

}
