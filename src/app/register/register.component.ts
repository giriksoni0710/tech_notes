import { Component, OnInit } from '@angular/core';
import { fn } from '@angular/compiler/src/output/output_ast';

import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  url: any;

  constructor(private http: HttpClient) {

    this.url = "http://giriksoni.com/notepad/register"

   }

  ngOnInit() {
  }

  register(fname: string, lname: string, email: string, password: string){

    var obj = {
      name: fname+lname,
      email: email,
      password: password
    }


   this.http.post(this.url, obj).toPromise().then(Response =>{
    // console.log(Response);
   }).catch(error =>{
     console.log(error)
   })
  }

}
