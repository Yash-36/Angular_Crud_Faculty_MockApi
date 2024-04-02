import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiFacultyService } from '../api-faculty.service';
import { Faculty } from '../faculty';

@Component({
  selector: 'app-detail-faculty',
  templateUrl: './detail-faculty.component.html',
  styleUrl: './detail-faculty.component.css'
})
export class DetailFacultyComponent {
  id = 0;
  data : Faculty = new Faculty();
  constructor(private _apifaculty: ApiFacultyService,private _activedroute:ActivatedRoute){}
  ngOnInit(){
    this.id = this._activedroute.snapshot.params['id'];
    this._apifaculty.getbyfaculty(this.id).subscribe((res:any)=>{
      this.data = res;
    });
  }

}
