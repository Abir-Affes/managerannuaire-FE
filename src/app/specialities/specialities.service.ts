import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Specialities } from './specialities';

@Injectable({
  providedIn: 'root'
})
export class SpecialitiesService {

  constructor(private http: HttpClient) {}
  get() {
    return this.http.get<Specialities[]>('http://localhost:8089/specialities');
  }
  create(payload: Specialities) {
    console.log(payload);
    return this.http.post<Specialities>('http://localhost:8089/specialities', payload);
  }
  getById(id: number) {
    return this.http.get<Specialities>(`http://localhost:8089/specialities/${id}`);
   }
    
   update(payload:Specialities){
    return this.http.put(`http://localhost:8089/specialities/${payload.id}`,payload);
   }
   delete(id:number){
    return this.http.delete<Specialities>(`http://localhost:8089/specialities/${id}`);
 }
}
