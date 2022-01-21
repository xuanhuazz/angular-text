import { Component, OnInit } from '@angular/core';
//引入MessageService
import { MessageService } from '../message.service';
@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss']
})
export class MessagesComponent implements OnInit {
  //这里是要设置一个公有的messageService，才能用
  constructor(public messageService: MessageService) { }


  ngOnInit(): void {
  }

}
