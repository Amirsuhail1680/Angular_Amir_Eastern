import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray, FormControl, FormGroupName } from '@angular/forms';
import { EmployeeService } from '../employee-service';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit {
  employeeForm: FormGroup;
  submitted:boolean=false;
  constructor(private formBuilder:FormBuilder,private employeeservice:EmployeeService,private route:Router) { }

  ngOnInit(): void {
    this.initemployeeForm()
  }
  initemployeeForm() {
    this.employeeForm = this.formBuilder.group({
        id: [''],
        phonenumber: ['', Validators.compose([Validators.required, Validators.pattern(/^(\d{10}|\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3}))$/)])],
        name: ['', Validators.required],
        address: this.getAddressInfo(),
    })
}
getAddressInfo() {
  return this.formBuilder.group({

      city: [''],
      address_line1: [''],
      address_line2: [''],
      postal_code: [''],   
  })
}
get gf() {
  return this.employeeForm.controls;

}
saveEmployeeInfo(){
  
  this.submitted = true;

  if (this.employeeForm.invalid) {
      return;
  }

  this.employeeservice.addEmp(this.employeeForm.value);
  this.route.navigate([''])
}
}
