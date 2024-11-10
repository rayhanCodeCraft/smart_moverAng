import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-doctor-card-component',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './doctor-card-component.component.html',
  styleUrl: './doctor-card-component.component.css'
})
export class DoctorCardComponentComponent {

}
