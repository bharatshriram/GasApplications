import { Component, ViewChild } from '@angular/core';
import { Demo001Component } from './Demo001/demo001/demo001.component';
import { Message } from './Model/models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  title = 'GasApplication';

  @ViewChild(Demo001Component) alert: Demo001Component;
  
  success(){
    //Saved successfully show the message
  var msg: Message ={ message: 'Saved successfully!', status: true };
  this.alert.show(msg);
  }

  failed(){
    //Saved failed show the error message
    var msg: Message ={ message: 'Failed to save!', status: false }
    this.alert.show(msg);
  }
  
}
