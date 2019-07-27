import { Component, OnInit } from '@angular/core';
import { UsersService } from '../user.service';
import { AdmService } from '../adm.service';

@Component({
  selector: 'app-alogin',
  templateUrl: './alogin.component.html',
  styleUrls: ['./alogin.component.css']
})
export class AloginComponent implements OnInit {

  email:String;
  password:String;
  constructor(private us:AdmService) { }

  ngOnInit() {
  }
  signInAdmin(){
    this.us.signInAdmin(this.email,this.password);
  }
 
}
