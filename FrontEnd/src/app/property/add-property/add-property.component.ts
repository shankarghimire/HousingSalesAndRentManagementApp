import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { TabsetComponent } from 'ngx-bootstrap/tabs';

@Component({
  selector: 'app-add-property',
  templateUrl: './add-property.component.html',
  styleUrls: ['./add-property.component.css']
})
export class AddPropertyComponent implements OnInit {
@ViewChild('Form') addPropertyForm!:NgForm;
@ViewChild('formTabs') formTabs?: TabsetComponent;
SellRent = '1';

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
