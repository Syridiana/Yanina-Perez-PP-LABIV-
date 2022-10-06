import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  imageUrl?: string;

  constructor(private http: HttpClient) {
    const url = 'https://api.github.com/users/syridiana';
    this.http.get(url).subscribe({
      next: 
      (data:  any) =>  {
       this.imageUrl = data.avatar_url;
      },
      error: error => { console.log(error) }
    })
   }

  ngOnInit(): void {
  }

}
