import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'templateFormclik';
  submitted = false
  model: any = {};
  submittedError= false;

  onSubmit({value, valid}) {
    if (valid) {
      this.submittedError=false;
       console.log(value);
     } else {
      this.submittedError=true;
       console.log('invalid form');
     }
   }
    
  }

