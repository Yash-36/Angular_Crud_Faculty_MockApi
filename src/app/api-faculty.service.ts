import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiFacultyService {
  apiUrl = "https://65ded7f9ff5e305f32a09e25.mockapi.io/faculty/";
  constructor(private _http:HttpClient) { }

  getAll(){
    return this._http.get(this.apiUrl);
  }

  getbyfaculty(id:any){
    return this._http.get(this.apiUrl + id);
  }

  deletebyfaculty(id:any){
    return this._http.delete(this.apiUrl + id);
  }

  insert(form:any){
    return this._http.post(this.apiUrl,form);
  }

  update(form:any,id:any){
    return this._http.put(this.apiUrl + id,form);
  }
}
