import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FacultiesComponent } from './faculties/faculties.component';
import { AddeditfacultyComponent } from './addeditfaculty/addeditfaculty.component';
import { DetailFacultyComponent } from './detail-faculty/detail-faculty.component';

const routes: Routes = [
  {path : '' , component : FacultiesComponent},
  {path : 'add' , component : AddeditfacultyComponent},
  {path : 'edit/:id' , component : AddeditfacultyComponent},
  {path : 'faculty/:id' , component : DetailFacultyComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
