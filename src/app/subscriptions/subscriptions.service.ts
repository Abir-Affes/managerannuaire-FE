import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subscriptions } from './subscriptions';
 
@Injectable({
  providedIn: 'root',
})
export class SubscriptionsService {
  constructor(private http: HttpClient) {}
  get() {
    return this.http.get<Subscriptions[]>('http://localhost:8087/subscriptions');
  }
  create(payload: Subscriptions) {
    return this.http.post<Subscriptions>('http://localhost:8087/subscriptions', payload);
  }
  getById(id: number) {
    return this.http.get<Subscriptions>(`http://localhost:8087/subscriptions/${id}`);
   }
    
   update(payload:Subscriptions){
    return this.http.put(`http://localhost:8087/subscriptions`,payload);
   }
   delete(id:number){
    return this.http.delete<Subscriptions>(`http://localhost:8087/subscriptions/${id}`);
 }
}