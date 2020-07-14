import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  registerMode: any = false;

  constructor() { }

  ngOnInit() {
  }

  toggleRegisterMode(){
    this.registerMode = true;
  }
  cancelRegisterMode(registerMode: any){
    this.registerMode = false;
  }
}
