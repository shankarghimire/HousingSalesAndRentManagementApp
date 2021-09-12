import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { nlLocale } from 'ngx-bootstrap/chronos';
import { TabsetComponent } from 'ngx-bootstrap/tabs';
import { IProperty } from '../../model/iproperty';

@Component({
  selector: 'app-add-property',
  templateUrl: './add-property.component.html',
  styleUrls: ['./add-property.component.css']
})
export class AddPropertyComponent implements OnInit {
@ViewChild('Form') addPropertyForm!:NgForm;
@ViewChild('formTabs') formTabs?: TabsetComponent;



//Will come from masters
bhkTypes:Array<string>=['1','2','3','4'];
propertyTypes:Array<string> =['House','Apartment','Duplex'];
furnishTypes:Array<string> = ['Fully','Semi','Unfurnished'];

propertyView:IProperty={
  Id:null||0,
  Name:null||'',
  Price:null || 0,
  SellRent:0,
  PType:null||'',
  FType:null||'',
  BHK:null || 0,
  BuiltArea : null ||0,
  City : null||'',
  RTM:null ||0,
  Description:null||'',


};

SellRent = '1';
// btnRadio!:string;

  constructor(private router:Router) { }

  ngOnInit(): void {
    //To show example of Synchronous
    // this.addPropertyForm.controls['Name'].setValue('Default Value');
    // setTimeout(()=>{
    //   this.addPropertyForm.controls['Name'].setValue('Default Value');
    // }, 1000);
  }

  onBack():void{
    this.router.navigate(['/']);
  }

  // onSubmit(Form:NgForm){
  //   console.log("Congrats! Forms Submitted!");
  //   console.log(Form);
  // }

  onSubmit(){
    console.log("Congrats! Forms Submitted!");
    console.log(this.addPropertyForm);
  }


  selectTab(tabId: number) {
    if (this.formTabs?.tabs[tabId]) {
      this.formTabs.tabs[tabId].active = true;
    }
  }

}
