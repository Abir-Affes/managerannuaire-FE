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
  allUsers: Users[] = [];
  deleteModal: any;
  idTodelete: number = 0;
 
  constructor(private userService: UsersService) {}
 
  ngOnInit(): void {
    this.deleteModal = new window.bootstrap.Modal(
      document.getElementById('deleteModal')
    );
 
    this.get();
  }
 
  get() {
    this.userService.get().subscribe((data) => {
      this.allUsers = data;
    });
  }
 
  openDeleteModal(id: number) {
    this.idTodelete = id;
    this.deleteModal.show();
  }
 
  delete() {
    this.userService.delete(this.idTodelete).subscribe({
      next: (data) => {
        this.allUsers = this.allUsers.filter(_ => _.id != this.idTodelete)
        this.deleteModal.hide();
      },
    });
  }
}