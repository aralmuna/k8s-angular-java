import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.css']
})
export class HelloComponent implements OnInit {

  url: string = "/api";
  text: string = "Hello v4";

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get<any>(this.url).subscribe(data => this.text = JSON.stringify(data));
  }

}
