import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Specialities } from '../specialities';
import { SpecialitiesService } from '../specialities.service';
 
@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],
})
export class CreateComponent implements OnInit {
  specialityForm: Specialities = {
    id: 0,
    name: '',
    description: '',
  };
 
  constructor(private specialityService:SpecialitiesService,
    private router:Router) {}
 
  ngOnInit(): void {}
 
  save(){
    this.specialityService.create(this.specialityForm)
    .subscribe({
      next:(data) => {
        this.router.navigate(["/specialities/home"])
      },
      error:(err) => {
        console.log(err);
      }
    })
  }
}