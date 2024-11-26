import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar-component',
  standalone: true,
  imports: [CommonModule,FormsModule,RouterModule],
  templateUrl: './navbar-component.component.html',
  styleUrl: './navbar-component.component.css'
})
export class NavbarComponentComponent {
  chatWithExpert() {
    alert('Connecting to a health expert...');
  }
}
