import { Component, OnInit } from '@angular/core';
import { Subscriptions } from '../subscriptions';
import { SubscriptionsService } from '../subscriptions.service';
import { DatePipe } from '@angular/common';

declare var window: any;
 
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})

export class HomeComponent implements OnInit {
  displayedColumns = ['id', 'experation', 'amount', 'payment', 'actions'];
  allSubscriptions: Subscriptions[] = [];
  deleteModal: any;
  idTodelete: number = 0;
 
  constructor(private subscriptionService: SubscriptionsService, private datePipe: DatePipe) {}
 
  ngOnInit(): void {
    
 
    this.get();
  }
 
  get() {
    this.subscriptionService.get().subscribe((data) => {
      this.allSubscriptions = data;
    });
    
  }
}