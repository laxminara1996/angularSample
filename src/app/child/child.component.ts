import { Component,EventEmitter,Input,Output } from '@angular/core';
@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {
    @Input('y') y:String='';
    @Output() myEvent:EventEmitter<string>=new EventEmitter();
    sendData():void{
     this.myEvent.emit('hello,i am find!');
    }
}
