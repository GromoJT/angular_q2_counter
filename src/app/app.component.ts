import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular_q2_counter';

  counterValue = 0;

  dsc(){
    this.counterValue = this.counterValue-1;
  }
  rst(){
    this.counterValue = 0;
  }
  add(){
    this.counterValue = this.counterValue+1;
  }

}
