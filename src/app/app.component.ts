import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  public outputData;
  
    showOutputData(data){
      this.outputData = data;
      console.log(data);
    }

}
