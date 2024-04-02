import { Component } from '@angular/core';
import { ApiFacultyService } from '../api-faculty.service';
import { Router } from '@angular/router';
import { Faculty } from '../faculty';

@Component({
  selector: 'app-faculties',
  templateUrl: './faculties.component.html',
  styleUrl: './faculties.component.css'
})
export class FacultiesComponent {
  id = 0;
  data : Faculty[] = []
  constructor(private _apifaculty: ApiFacultyService, private _router:Router){}

  ngOnInit(){
    this._apifaculty.getAll().subscribe((res:any)=>{
      this.data = res;
      // console.log(res);
    });
  }

  delete(id:any){
    this._apifaculty.deletebyfaculty(id).subscribe((res:any)=>{
      this.ngOnInit();
    });
  }
}
