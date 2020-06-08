import { Component, OnInit } from '@angular/core';
import{FormGroup, FormControl, Validators, FormBuilder, AbstractControl, EmailValidator } from '@angular/forms';

@Component({
  selector: 'app-demo-form',
  templateUrl: './demo-form.component.html',
  styleUrls: ['./demo-form.component.css']
})
export class DemoFormComponent implements OnInit {
  employeeForm: FormGroup;
  constructor(private formBuilder:FormBuilder) { }

  // ngOnInit(): void {
  //   this.employeeForm =new FormGroup({
  //     email: new FormControl('',Validators.required),
  //     name: new FormControl('')
  //   });
  // }
ngOnInit(): void {
  this.employeeForm = this.formBuilder.group({
    name: ['',[Validators.required, Validators.minLength(3), Validators.maxLength(20)]],
    email: ['',[Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"), emailDomain]]
    //email: ['',Validators.email]
  });
}

  onSubmit(){
    if(this.employeeForm.invalid){
      console.log("invalid");
    }
    else{
      console.log(this.employeeForm.value)
    }
  }

} 
  
  //----------CUSTOM VALIDATOR: eg - @uworld.com
  function emailDomain(control: AbstractControl) : {[key: string] : any} | null
  {
     const emailStr : string = control.value;
    //msampara@uworld.com
    //msampara@azure.uworld.com - 2nd @
     const domain = emailStr.substring(emailStr.lastIndexOf('@')+1);

     if(domain.toLowerCase() === 'uworld.com')
     {
       //passed validation
       return null;
     }
     else
     {
       //string: any error object
       return {'emailDomain' : true};
     }
  }


