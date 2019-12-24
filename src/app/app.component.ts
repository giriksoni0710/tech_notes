import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'techNotes';


  // this is the method binded to the save note button click 
  savenote(title: string, titlebody: string){
    
  }

}


