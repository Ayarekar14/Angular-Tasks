import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {


  @Input() name:any;
  @Output() message = new EventEmitter<String>();

  txtName:any;

  textInput(event: Event) {
    let ctrl = <HTMLInputElement>event.target;
    this.txtName = ctrl.value;
    }
    sendData() {
    this.message.emit(this.txtName);
    }

}
