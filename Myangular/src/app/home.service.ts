import { Injectable } from '@angular/core';
//引入属性和数据
import {Homesx} from './homesx/homesx'
import {HOME} from './mock_home'
//引入http数据
import { HttpClient, HttpHeaders } from '@angular/common/http';
//引入Observable，of
import { Observable,of } from 'rxjs';
//引入messageService
import { MessageService } from './message.service';
@Injectable({
  providedIn: 'root'
})
export class HomeService {
  //获取home姓名的方法
  // getHome():Observable<Homesx[]> {
  //   const home = of(HOME)
  //   this.messageService.add('获取数据');//当获取到数据时，发送消息
  //   return home
  // }
  getHome():Observable<Homesx[]> {
    return this.http.get<Homesx[]>(this.homeUrl)
  }
  //获取参数id的方法
  getId(id:number):Observable<Homesx|undefined> {
    const home = HOME.find(h =>h.id === id)  //通过find
    this.messageService.add(`得到id${{home}}`);//当获取到数据时，发送消息
    return of(home)
  }
  private log(message: string) {
    this.messageService.add(`HeroService: ${message}`);
  }
  private homeUrl = 'api/home';  // URL to web api
  constructor(private messageService:MessageService,private http:HttpClient) { }
}
