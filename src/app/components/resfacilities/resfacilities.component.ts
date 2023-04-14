import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';
import * as moment from 'moment';

@Component({
  selector: 'app-resfacilities',
  templateUrl: './resfacilities.component.html',
  styleUrls: ['./resfacilities.component.css']
})
export class ResfacilitiesComponent implements OnInit {

  myData: any;
  myDate = new Date();
  formattedDate = moment(this.myDate).format('MMM Do YYYY, h:mm:ss a');

  constructor(private service: SharedService) { }

  ngOnInit(): void {
    this.GetListResFacilities();
    this.GetListPrices();
  }

  dataList:any = [];
  dataItem:any = {};
  addReservationForm:any = {};
  dataListPrice:any = [];
  filterFacility:any = [];

  FilterFacility(){
    this.dataListPrice.forEach((item: any) => {
      if(item.facilityName != "Student" && item.facilityName != "Regular"){
        this.filterFacility.push(item);
      }
    });
    console.log("filter", this.filterFacility);
  }


  GetListResFacilities(){
    this.service.GetListResFacilities().subscribe(data=>{
      this.dataList = (<any>data);
      console.log("reservationForm", data);
    }) 
  }

  AddResFacilities(){
    this.addReservationForm.datetimeReservation = this.formattedDate;
    console.log("data",this.addReservationForm);
    this.service.AddResFacilities(this.addReservationForm).subscribe(data=>{
      console.log("add", data);
      this.GetListResFacilities();
    })
  }

  GetListPrices(){
    this.service.GetListPrices().subscribe(data=>{
      this.dataListPrice = (<any>data);
      console.log("prices", data);
      this.FilterFacility();
    }) 
  }

}
