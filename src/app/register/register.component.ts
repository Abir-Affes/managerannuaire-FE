import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { Specialities } from '../specialities/specialities';
import { SpecialitiesService } from '../specialities/specialities.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  allSpecialities: Specialities[] = [];
  form: any = {
    username: null,
    email: null,
    password: null,
    speciality:{
      id :null,
      name:null,
      description:null,
    }
  };
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';

  constructor(private authService: AuthService,
    private specialityService: SpecialitiesService,
    ) { }

  ngOnInit(): void {
    this.get();
  }

  get() {
    this.specialityService.get().subscribe((data) => {
      this.allSpecialities = data;
    });
  }
  onSubmit(): void {
    const { username, email, password, speciality} = this.form;

    this.authService.register(username, email, password, speciality).subscribe(
      data => {
        console.log(data);
        this.isSuccessful = true;
        this.isSignUpFailed = false;
      },
      err => {
        this.errorMessage = err.error.message;
        this.isSignUpFailed = true;
      }
    );
  }
}
