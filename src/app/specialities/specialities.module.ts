import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SpecialitiesRoutingModule } from './specialities-routing.module';
import { HomeComponent } from './home/home.component';
import { CreateComponent } from './create/create.component';
import { FormsModule } from '@angular/forms';
import { EditComponent } from './edit/edit.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTableModule } from '@angular/material/table';
import {MatInputModule} from '@angular/material/input';



@NgModule({
  declarations: [
    HomeComponent,
    CreateComponent,
    EditComponent
  ],
  imports: [
    CommonModule,
    SpecialitiesRoutingModule,
    FormsModule,
    MatButtonModule,
    MatIconModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
  ]
})
export class SpecialitiesModule { }
