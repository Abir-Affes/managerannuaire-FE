import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscriptions } from '../subscriptions';
import { SubscriptionsService } from '../subscriptions.service';
 
@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],
})
export class CreateComponent implements OnInit {
  subscriptionForm: Subscriptions = {
    id: 0,
    experation: new Date(),
    amount: 0,
    payment: '',
  };
 
  constructor(private subscriptionService:SubscriptionsService,
    private router:Router) {}
 
  ngOnInit(): void {}
 
  create(){
    this.subscriptionService.create(this.subscriptionForm)
    .subscribe({
      next:(data) => {
        this.router.navigate(["/subscriptions/home"])
      },
      error:(err) => {
        console.log(err);
      }
    })
  }
}