import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'IODemoTwoWay';
  txtName:any;
  name:any;


  sendData()
  {
    this.name = this.txtName;
  }

  receiveData(receivedName:String)
  {
    this.txtName = receivedName;
  }
}
