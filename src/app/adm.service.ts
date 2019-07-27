import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router'

 
@Injectable({
  providedIn: 'root'
})
export class AdmService {
 
  url = 'http://localhost:3000';
  constructor(private http: HttpClient, private router : Router) { }
 
  signInAdmin(email,password){
    const obj = {email, password};
    console.log(obj);
    this
      .http
      .post(`${this.url}/alogin`,obj)
      .subscribe((res:any) => {
        if(res.message){
          alert(res.message);
        }
        else{
  
          this.router.navigateByUrl(`/view`);
        }
      });
  }
  getDataById1(id){
    return this
      .http
      .get(`${this.url}/getbyid/${id}`);
  }

}