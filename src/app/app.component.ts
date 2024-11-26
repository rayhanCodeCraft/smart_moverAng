import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink, RouterOutlet } from '@angular/router';

import { HeroComponent } from './components/home/hero/hero.component';
import { ContentSectionComponent } from './components/home/content-section/content-section.component';


import { DoctorCardComponentComponent } from './components/NewDoctor/doctor-card-component/doctor-card-component.component';
import { DoctorListComponentComponent } from './components/NewDoctor/doctor-list-component/doctor-list-component.component';
import { HospitalCardComponentComponent } from "./components/hospital_component/hospital-card-component/hospital-card-component.component";
import { TreatmentCardComponentComponent } from "./components/treatmentSection/treatment-card-component/treatment-card-component.component";
import { NavbarComponentComponent } from './components/navbar-component/navbar-component.component';
import { FooterComponentComponent } from "./components/footer-component/footer-component.component";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet,
    HeroComponent,
    ContentSectionComponent,
    DoctorCardComponentComponent, DoctorListComponentComponent, HospitalCardComponentComponent, TreatmentCardComponentComponent, NavbarComponentComponent, FooterComponentComponent],
  
    template: `
    <app-navbar-component></app-navbar-component>
    <router-outlet></router-outlet>
    <app-footer-component></app-footer-component>
  `,
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'smart_moverAng';

  doctors = [
    {
      name: 'Dr. Pradeep Chowbey',
      position: 'Chairman - Max Institute of Laparoscopic, Endoscopic...',
      hospital: 'Max Healthcare Saket',
      experience: '45+ years',
      surgeries: '85,000+',
      image: 'https://storage.googleapis.com/a1aa/image/mLpMSd7Dk4IKG9kF4lXb0HVgDPeX5zbq1IEGpIaEKU7wME0JA.jpg'
    },
    {
      name: 'Prof. Dr. S. Natarajan',
      position: 'Vitreoretinal Surgeon, Chief Clinical Services',
      hospital: 'Dr Agarwals Eye Hospital, Wadala, Mumbai',
      experience: '36 years',
      surgeries: '60,000+',
      image: 'https://storage.googleapis.com/a1aa/image/BZLXvbiI8m6aERuLeTTGQFyjVIpxJ5deKTz4CjoNJRAgZIoTA.jpg'
    },
    {
      name: 'Dr. Suraj Munjal',
      position: 'Medical Director - Ophthalmology',
      hospital: 'The Sight Avenue',
      experience: '17 years',
      surgeries: '50,000+',
      image: 'https://storage.googleapis.com/a1aa/image/kgzyIs7JOVqOBBJtlyenJ5ejViPS3fdZONydVH1WtVa9yQQnA.jpg'
    }
  ];

  hospital = [
    {
      name: 'Quironsalud Hospital Group',
      location: 'Madrid, Spain',
      image: 'https://storage.googleapis.com/a1aa/image/5liXHl0cevTcbigxhlaibjPaGrWAggrqaGJJJsLGUmd0YE0JA.jpg'
    },
    {
      name: 'KIMS Hospital',
      location: 'Hyderabad, India',
      image: 'https://storage.googleapis.com/a1aa/image/5n0zXRWijkq3ERkIaBf2DEYDh36xaxV2LJs635gwqCCzYE0JA.jpg'
    },
    {
      name: 'Amrita Hospital Faridabad',
      location: 'Faridabad, India',
      image: 'https://storage.googleapis.com/a1aa/image/CzLB2eVDdtRbYKZbQb60eQCd84wDX08KUXjHZE4i2ziixIoTA.jpg'
    },
    {
      name: 'Ayu Health Hospitals',
      location: 'Bengaluru, India',
      image: 'https://storage.googleapis.com/a1aa/image/P2ag96ieQ4WSYS82sbXpEXBO9QP9lRMto8oD0dMrNjzxYE0JA.jpg'
    },
    
  ];

  // Method for 'Chat with health expert' action
  chatWithExpert() {
    alert('Starting chat with a health expert...');
  }
}

