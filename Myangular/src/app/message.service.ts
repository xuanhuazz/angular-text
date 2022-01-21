import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  message:string[] = []
  //新增方法
  add(m:string){
    this.message.push(m)
  }
  //清除方法
  clear(){
    this.message = []
  }
  constructor() { }
}
