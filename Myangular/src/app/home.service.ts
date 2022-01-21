import { Injectable } from '@angular/core';
//引入属性和数据
import {Homesx} from './homesx/homesx'
import {HOME} from './mock_home'
//引入Observable，of
import { Observable,of } from 'rxjs';
//引入messageService
import { MessageService } from './message.service';
@Injectable({
  providedIn: 'root'
})
export class HomeService {
  getHome():Observable<Homesx[]> {
    const home = of(HOME)
    this.messageService.add('获取数据');//当获取到数据时，发送消息
    return home
  }
  constructor(private messageService:MessageService) { }
}
