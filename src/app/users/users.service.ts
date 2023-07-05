import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Users } from './users';
 
@Injectable({
  providedIn: 'root',
})
export class UsersService {
  constructor(private http: HttpClient) {}
  get() {
    return this.http.get<Users[]>('http://localhost:8087/users');
  }
  
  create(payload: Users) {
    console.log("onhhhhhhhhhhhhe");
    console.log(payload);
    return this.http.post<Users>('http://localhost:8087/users', payload);
    console.log("onhbjnk,l;mkijuhje");
  }
  getById(id: number) {
    return this.http.get<Users>(`http://localhost:8087/users/${id}`);
   }
    
   update(payload:Users){
    return this.http.put(`http://localhost:8087/users`,payload);
   }
   delete(id:number){
    return this.http.delete<Users>(`http://localhost:8087/users/${id}`);
 }
}