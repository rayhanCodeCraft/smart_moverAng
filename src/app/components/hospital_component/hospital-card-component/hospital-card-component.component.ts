import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-hospital-card-component',
  standalone: true,
  imports: [CommonModule,FormsModule,HospitalCardComponentComponent],
  templateUrl: './hospital-card-component.component.html',
  styleUrl: './hospital-card-component.component.css'
})
export class HospitalCardComponentComponent {
 

}
