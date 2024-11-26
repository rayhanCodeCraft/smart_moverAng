import { RouterModule, Routes } from '@angular/router';
import { HeroComponent } from './components/home/hero/hero.component';
import { DoctorListComponentComponent } from './components/NewDoctor/doctor-list-component/doctor-list-component.component';
import { HospitalCardComponentComponent } from './components/hospital_component/hospital-card-component/hospital-card-component.component';
import { TreatmentCardComponentComponent } from './components/treatmentSection/treatment-card-component/treatment-card-component.component';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { DoctorCardComponentComponent } from './components/NewDoctor/doctor-card-component/doctor-card-component.component';
import { ContentSectionComponent } from './components/home/content-section/content-section.component';

export const routes: Routes = [
  { path: '', component: HeroComponent }, // Default route (Home)
  { path: 'content', component: ContentSectionComponent }, // Content Section page
  { path: 'doctors', component: DoctorCardComponentComponent }, // Doctor List page
  { path: 'hospitals', component: HospitalCardComponentComponent }, // Hospital Cards page
  { path: 'treatments', component: TreatmentCardComponentComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
