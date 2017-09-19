import { Component ,Input,Output,OnInit,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent  implements OnInit {

private counterValue;
@Output() counterChange = new EventEmitter();
@Input('initialValue') initialValue;

ngOnInit() {
  console.log("initial value "+this.initialValue);
  this.counterValue=this.initialValue;
}

  constructor() { 
    this.counterValue=0;
  }
  increase() {
   this.counterValue= this.counterValue+1;
   this.counterChange.emit(this.counterValue);
   return false;
  }
  decrease() {
    this.counterValue= this.counterValue-1;
   this.counterChange.emit(this.counterValue);
   return false;
  } 
}
