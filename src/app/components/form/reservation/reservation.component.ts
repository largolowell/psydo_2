import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';


@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css']
})
export class ReservationComponent implements OnInit {
  myData: any;

  constructor(private service: SharedService) { }

  dataList:any = [];
  dataItem:any = {};
  addReservationForm:any = {};

  ngOnInit(): void {
    this.GetListReservationForm();
  }

  GetListReservationForm(){
    this.service.GetListReservationForm().subscribe(data=>{
      this.dataList = (<any>data);
      console.log("reservationForm", data);
    }) 
  }

  AddReservationForm(){
    console.log("data",this.addReservationForm);
    this.service.AddReservationForm(this.addReservationForm).subscribe(data=>{
      console.log("add", data);
    })
  }
 
}
