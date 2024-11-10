import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-treatment-card-component',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './treatment-card-component.component.html',
  styleUrl: './treatment-card-component.component.css'
})
export class TreatmentCardComponentComponent {

}
