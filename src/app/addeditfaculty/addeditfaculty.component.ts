import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiFacultyService } from '../api-faculty.service';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-addeditfaculty',
  templateUrl: './addeditfaculty.component.html',
  styleUrl: './addeditfaculty.component.css'
})
export class AddeditfacultyComponent {
  id = -1;
  constructor(private _activedroute: ActivatedRoute, private _apifaculty: ApiFacultyService, private _router: Router) {

  }

  myForm = new FormGroup({
    id: new FormControl(''),
    FacultyName: new FormControl(''),
    FacultyDesignation: new FormControl(''),
    FacultyEducationQualification: new FormControl(''),
    FacultyExperience: new FormControl(''),
    FacultyWorkingSince: new FormControl(''),
    FacultyImage: new FormControl(''),
  });

  ngOnInit() {
    if (this._activedroute.snapshot.params['id'] != null) {
      this.id = this._activedroute.snapshot.params['id'];
      this._apifaculty.getbyfaculty(this.id).subscribe((res: any) => {
        this.myForm.controls.id.setValue(res.id);
        this.myForm.controls.FacultyName.setValue(res.FacultyName);
        this.myForm.controls.FacultyDesignation.setValue(res.FacultyDesignation);
        this.myForm.controls.FacultyEducationQualification.setValue(res.FacultyEducationQualification);
        this.myForm.controls.FacultyExperience.setValue(res.FacultyExperience);
        this.myForm.controls.FacultyWorkingSince.setValue(res.FacultyWorkingSince);
        this.myForm.controls.FacultyImage.setValue(res.FacultyImage);
      })
    }
  }

  saveData() {
    if (this.id > 0) {
      this._apifaculty.update(this.myForm.value, this.id).subscribe((res: any) => {
        this._router.navigate(['/']);
      });
    }
    else {
      this._apifaculty.insert(this.myForm.value).subscribe((res: any) => {
        this._router.navigate(['/']);
      });
    }
  }
}

