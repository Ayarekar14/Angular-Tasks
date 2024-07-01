import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {

  @Input() childName:any;
  @Output() name = new EventEmitter<String>();

  sendData()
  {
    this.name.emit(this.childName);
  }
}
