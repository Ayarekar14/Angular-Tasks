import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'IODemo';

  name:any = "iGAP";
  txtName:any;

  textInput(event:Event)
  {
    let ctrl = <HTMLInputElement>event.target;

    this.txtName = ctrl.value;
  }
  showText()
  {
    this.name = this.txtName;
  }
  readData(name: String) {
      this.name = name;
      
    }
}
