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
  allSpecialities: Specialities[] = [];
  deleteModal: any;
  idTodelete: number = 0;
 
  constructor(private specialityService: SpecialitiesService) {}
 
  ngOnInit(): void {
    this.deleteModal = new window.bootstrap.Modal(
      document.getElementById('deleteModal')
    );
 
    this.get();
  }
 
  get() {
    this.specialityService.get().subscribe((data) => {
      this.allSpecialities = data;
    });
  }
 
  openDeleteModal(id: number) {
    this.idTodelete = id;
    this.deleteModal.show();
  }
 
  delete() {
    this.specialityService.delete(this.idTodelete).subscribe({
      next: (data) => {
        this.allSpecialities = this.allSpecialities.filter(_ => _.id != this.idTodelete)
        this.deleteModal.hide();
      },
    });
  }
}