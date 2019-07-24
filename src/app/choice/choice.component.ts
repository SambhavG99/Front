import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-choice',
  templateUrl: './choice.component.html',
  styleUrls: ['./choice.component.css']
})
export class ChoiceComponent {

  public show:boolean = false;
  ngOnInit() {
  }
  toggle() {
    this.show = !this.show;}
}
