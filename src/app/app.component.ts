import {Component} from '@angular/core';
import {ApiService} from "./api.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})



export class AppComponent {

  title = "Live  ! ";
  employees=[{firstName:"Ashish",lastName:"Tulsankar"},{firstName:"Sanket",lastName:"Tulsankar"}];
  displayData:boolean=false;
  receivedData:String='abcd';

  constructor(private apiService: ApiService){
      console.log("AppComponent constructor init");
  }

  getEmpDetails() {
    this.apiService.getEmpDetails(20004).then((res=>{
      console.log("getEmpDetails",res['firstName']);
      this.receivedData=res['firstName'];
      this.displayData=true;
    }))
  }
}
