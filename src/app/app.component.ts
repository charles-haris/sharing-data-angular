import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'sharing_data';
  //variable (user_name) that must appear in the child component
  user_name = 'charles_haris';
  email = 'bouasse@gmail.com';

}
