import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  readonly APIUrl = "https://localhost:44349/api";

  constructor(private http: HttpClient) { }

  GetListReservationForm():Observable<any[]>{
    return this.http.get<any[]>(this.APIUrl+'/reservationForms');
  }
  AddReservationForm(add:any={}){
    return this.http.post<any[]>(this.APIUrl+'/reservationForms',add);
  }
}
