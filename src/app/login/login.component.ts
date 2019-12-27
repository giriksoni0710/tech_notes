import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  url: any

  constructor(private http: HttpClient) {

    
    this.url = "http://giriksoni.com/notepad/login"
   }

  ngOnInit() {
  }

  login(email: string, password: string) {

    const obj = {
      email: email,
      password: password
    }

    this.http.post(this.url, obj, {responseType: "text"}).toPromise().then(response=>{

      if(response=="exists"){
          console.log("present")
      }
      else{
        console.log("userid/password invalid")
      }

    })


  }

}
