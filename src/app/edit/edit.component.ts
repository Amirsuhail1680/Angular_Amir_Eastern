import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import{ employees  } from '../employee-list'
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {
  employee;
  employeeForm:FormGroup
  submitted;
  constructor(private route:ActivatedRoute,private formBuilder:FormBuilder,private router:Router) { }

  ngOnInit() {      
    this.route.paramMap.subscribe(params => {
    this.employee = employees[+params.get('employeeId')];
    console.log(this.employee);
    this.initemployeeForm();
    this.patchEmployeeInfo();
  }
  )};
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

editEmployeeInfo(){
  this.submitted = true;

  if (this.employeeForm.invalid) {
      return;
  }

  // this.employeeservice.addEmp(this.employeeForm.value);
  this.router.navigate([''])

}
patchEmployeeInfo(){
  this.employeeForm.controls['name'].setValue(this.employee.name);
  this.employeeForm.controls['phonenumber'].setValue(this.employee.phone);
  let generalInfoFormGroup = <FormGroup>this.employeeForm.controls['address'];
  generalInfoFormGroup.controls['city'].setValue(this.employee.address[0].city);
  generalInfoFormGroup.controls['address_line1'].setValue(this.employee.address[0].address_line1);
  generalInfoFormGroup.controls['address_line2'].setValue(this.employee.address[0].address_line2);
  generalInfoFormGroup.controls['postal_code'].setValue(this.employee.address[0].postal_code);
  // this.employeeForm.controls['name'].setValue(this.employee.name);
}
}