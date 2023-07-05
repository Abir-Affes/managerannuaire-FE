import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Users } from '../users';
import { UsersService } from '../users.service';
import { Specialities } from 'src/app/specialities/specialities';
import { SpecialitiesService } from 'src/app/specialities/specialities.service';
 
@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],
})
export class CreateComponent implements OnInit {
  allSpecialities: Specialities[] = [];
  userForm: Users = {
    id: 0,
    email: '',
    username: '',
    password:'',
    speciality:{
      id :0,
      name:'',
      description:'',
    }
  };
 
  constructor(private userService:UsersService,
    private specialityService: SpecialitiesService,
    private router:Router) {}
 
  ngOnInit(): void {
    this.get();
    console.log("one");
  }
 
  get() {
    this.specialityService.get().subscribe((data) => {
      console.log("two");
      this.allSpecialities = data;
      console.log("three");
    });
  }
 
  create(){
    console.log("four");
    this.userService.create(this.userForm)
    .subscribe({
      next:(data) => {
        this.router.navigate(["/users/home"])
      },
      error:(err) => {
        console.log(err);
      }
    })
    console.log("five");
  }
}
