import { Component, OnInit,Input } from '@angular/core';

//引入类型文件
import {Homesx} from '../homesx/homesx' 
//引入获取路由参数的依赖
import { ActivatedRoute } from '@angular/router';//保存路由信息，提取参数用的
import { Location } from '@angular/common';      //一个angular的服务
import { HomeService } from '../home.service';  //获取数据
@Component({
  selector: 'app-home-detail',
  templateUrl: './home-detail.component.html',
  styleUrls: ['./home-detail.component.scss']
})

export class HomeDetailComponent implements OnInit {

  // @Input() home?: Homesx;   //接收数据需要用@Input()
  home:Homesx | undefined //定义home数组
  constructor(private acroute:ActivatedRoute,private location:Location,private homeService:HomeService) { }
  getDetail():void {
    const id = Number(this.acroute.snapshot.paramMap.get('id')) //得到参数的语法
    this.homeService.getId(id).subscribe(h => this.home = h)  //通过getId方法，得到匹配后的信息
  }
  ngOnInit(): void {
    this.getDetail()
  }

}
