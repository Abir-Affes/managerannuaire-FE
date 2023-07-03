import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscriptions } from '../subscriptions';
import { SubscriptionsService } from '../subscriptions.service';
 
@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css'],
})
export class EditComponent implements OnInit {
  subscriptionForm: Subscriptions = {
    id: 0,
    experation: new Date(),
    amount: 0,
    payment: '',
  };
  constructor(
    private route: ActivatedRoute,
    private router:Router,
    private subscriptionService: SubscriptionsService
  ) {}
 
  ngOnInit(): void {
    this.route.paramMap.subscribe((param) => {
      var id = Number(param.get('id'));
      this.getById(id);
    });
  }
 
  getById(id: number) {
    this.subscriptionService.getById(id).subscribe((data) => {
      this.subscriptionForm = data;
    });
  }
 
  update() {
    this.subscriptionService.update(this.subscriptionForm)
    .subscribe({
      next:(data) => {
        this.router.navigate(["/fruits/home"]);
      },
      error:(err) => {
        console.log(err);
      }
    })
  }
}