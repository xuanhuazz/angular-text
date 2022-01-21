import { Component, OnInit } from '@angular/core';
//引入属性Homesx
import { Homesx } from '../homesx/homesx';
//引入获取数据
import { HomeService } from '../home.service';
@Component({
  selector: 'app-school',
  templateUrl: './school.component.html',
  styleUrls: ['./school.component.scss']
})
export class SchoolComponent implements OnInit {
  school:Homesx[] = []
  getSchool(){
    this.homeservice.getHome().subscribe(h => this.school = h.slice(0,6))
  }
  constructor(private homeservice:HomeService) { }

  ngOnInit(): void {
    this.getSchool()
  }

}
