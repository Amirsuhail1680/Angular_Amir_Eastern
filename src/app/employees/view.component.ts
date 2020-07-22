import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import{ employees  } from '../employee-list'
import { EmployeeService } from '../employee-service';
@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class ViewComponent implements OnInit {
  employees=employees;
  searchText;
  tableData = [];
  constructor(private router:Router,private empService:EmployeeService){

  }
  ngOnInit() {
    this.getData();
    this.testload();
  }
  getData(){

    let sample_data = this.employees;
    this.loadData(sample_data);
    
  }
  loadData(data){
    this.tableData = [...this.tableData, ...data];;
  }
  testload(){
    let cscs=this.empService.employees.subscribe((filterData) => {
      if (filterData != null) {
      let tableData = filterData;
      console.log(tableData);
      }
    })
  }

  
  addItem() {
    this.router.navigate(['/adduser']);
  }


}
