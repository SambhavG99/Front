import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router'

 
@Injectable({
  providedIn: 'root'
})
export class UsersService {
 
  url = 'http://localhost:3000';
  constructor(private http: HttpClient, private router : Router) { }
  addData(name,email,password,weight,height) {
      const obj = {name,email,password,weight,height};
      this
          .http
          .post(`${this.url}/add`, obj)
          .subscribe(res => console.log(res));
  }

  tempGet(){
    this.http.get('127.0.0.1:3000/view').subscribe(res=>alert(res));
  }
 
  getData() {
      return(
      this
          .http
          .get(`${this.url}/view`)
      );
  }
  upData(id, name) {
      const obj = { name };
      this
          .http
          .post(`${this.url}/update/${id}`, obj)
          .subscribe(res => console.log(res));
  }
  delData(id) {
      return this.http.get(`${this.url}/delete/${id}`).subscribe();
  }
  editData(id) {
    return this
            .http
            .get(`${this.url}/edit/${id}`);
    }
 
 
    up_data(name,email,password,weight,height, id) {
 
      const obj = {
          name: name,
          email:email,  
          password: password,
          weight: weight,
          height:height
          
        };
      this
        .http
        .post(`${this.url}/update/${id}`, obj)
        .subscribe(res => console.log('Done'));
      }

signIn(email,password){
  const obj = {email, password};
  console.log(obj);
  this
    .http
    .post(`${this.url}/signin`,obj)
    .subscribe((res:any) => {
      if(res.message){
        alert(res.message);
      }
      else{

        this.router.navigateByUrl(`/choice`);
      }
    });
}
getDataById(id){
  return this
    .http
    .get(`${this.url}/getbyid/${id}`);
}

}