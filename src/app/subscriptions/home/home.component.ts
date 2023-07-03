import { Component, OnInit } from '@angular/core';
import { Subscriptions } from '../subscriptions';
import { SubscriptionsService } from '../subscriptions.service';
 
declare var window: any;
 
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  allSubscriptions: Subscriptions[] = [];
  deleteModal: any;
  idTodelete: number = 0;
 
  constructor(private subscriptionService: SubscriptionsService) {}
 
  ngOnInit(): void {
    this.deleteModal = new window.bootstrap.Modal(
      document.getElementById('deleteModal')
    );
 
    this.get();
  }
 
  get() {
    this.subscriptionService.get().subscribe((data) => {
      this.allSubscriptions = data;
    });
  }
 
  openDeleteModal(id: number) {
    this.idTodelete = id;
    this.deleteModal.show();
  }
 
  delete() {
    this.subscriptionService.delete(this.idTodelete).subscribe({
      next: (data) => {
        this.allSubscriptions = this.allSubscriptions.filter(_ => _.id != this.idTodelete)
        this.deleteModal.hide();
      },
    });
  }
}