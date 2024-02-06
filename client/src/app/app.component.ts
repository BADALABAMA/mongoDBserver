import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';

import { user } from './interface';
import { ApiService } from './api.service';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  public title = 'mongoDBserver';
  public users: user[] = [];

  constructor(private apiService: ApiService) {}
  ngOnInit(): void {
    this.apiService.getUsers().subscribe(
      (data) => {
        const usersData = data;
        console.log('Users:', usersData);

        this.users = usersData.map((user: user) => user);
        console.log(this.users);
      },
      (error) => {
        console.error('Error fetching user:', error);
      }
    );
  }

  public createUser() {
    const email = 'example@example.com';
    const password = 'password123';
    this.apiService.createUser(email, password).subscribe((response) => {
      console.log(response);
    });
  }
}
