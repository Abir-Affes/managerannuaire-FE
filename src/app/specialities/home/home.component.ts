import { Component, OnInit } from '@angular/core';
import { Specialities } from '../specialities';
import { SpecialitiesService } from '../specialities.service';
 
declare var window: any;
 
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  displayedColumns = ['id', 'name', 'description', 'actions'];

  allSpecialities: Specialities[] = [];
  deleteModal: any;
  idTodelete: number = 0;
 
  constructor(private specialityService: SpecialitiesService) {}
 
  ngOnInit(): void {
    
 
    this.get();
  }
 
  get() {
    this.specialityService.get().subscribe((data) => {
      this.allSpecialities = data;
    });
  }
 
  
}