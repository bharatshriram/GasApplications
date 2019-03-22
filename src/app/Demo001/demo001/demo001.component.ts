import { Component, OnInit } from '@angular/core';
import { Message } from '../../Model/models';

@Component({
  selector: 'app-demo001',
  templateUrl: './demo001.component.html',
  styleUrls: ['./demo001.component.css']
})
export class Demo001Component {
 
  message: Message = null;
  constructor(){ }

  show(msg: Message ){
    debugger;
    this.message = msg;
    setTimeout(()=>{
      this.message = null;
    }, 2000)
  }

}
