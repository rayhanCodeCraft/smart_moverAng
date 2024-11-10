import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-content-section',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './content-section.component.html',
  styleUrl: './content-section.component.css'
})
export class ContentSectionComponent {

}
