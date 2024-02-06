import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { user } from './interface';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  getUsers(): Observable<any> {
    const url: string = 'http://localhost:3000/users';

    console.log(this.http.get(url));
    return this.http.get(url);
  }

  public createUser(email: string, password: string): Observable<user> {
    const newUser = {
      email: email,
      password: password,
      userType: 'user',
      img: 'https://e7.pngegg.com/pngimages/81/570/png-clipart-profile-logo-computer-icons-user-user-blue-heroes.png',
    };
    return this.http.post<user>('http://localhost:3000/new-user', newUser);
  }
}
