import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink, RouterModule } from '@angular/router';
import { DoctorCardComponentComponent } from '../doctor-card-component/doctor-card-component.component';

@Component({
  selector: 'app-doctor-list-component',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule,DoctorCardComponentComponent],
  templateUrl: './doctor-list-component.component.html',
  styleUrls: ['./doctor-list-component.component.css'],
  

})
export class DoctorListComponentComponent {
  @Input() doctors: any[] = [];
}
