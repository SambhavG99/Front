import { Component} from '@angular/core';

@Component({
  selector: 'app-binding',
  templateUrl: './binding.component.html',
  styleUrls: ['./binding.component.css']
})
export class BindingComponent{
employees: any[]=[   //Employees is an array and any is a datatype which can store any type of data
  {
   "fname":"Sam",
   "lname":"Snow",
   "age":23
  },
  {
    "fname":"Shobhit",
    "lname":"Bhar",
    "age":21
  }
]
}
