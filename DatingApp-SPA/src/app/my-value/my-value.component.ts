import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-my-value',
  templateUrl: './my-value.component.html',
  styleUrls: ['./my-value.component.css'],
})
export class MyValueComponent implements OnInit {
  values: any;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.getValues();
  }

  getValues() {
    this.http.get('http://localhost:5000/api/values').subscribe(
      (response) => {
        this.values = response;
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
