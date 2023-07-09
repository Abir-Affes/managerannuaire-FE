import { Component, OnInit } from '@angular/core';
import { Users } from '../users';
import { UsersService } from '../users.service';
 
declare var window: any;
 
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  displayedColumns = ['id', 'email', 'username', 'actions'];

  allUsers: Users[] = [];
  deleteModal: any;
  idTodelete: number = 0;
 
  constructor(private userService: UsersService) {}
 
  ngOnInit(): void {
    
 
    this.get();
  }
 
  get() {
    this.userService.get().subscribe((data) => {
      this.allUsers = data;
    });
  }
 
  
}