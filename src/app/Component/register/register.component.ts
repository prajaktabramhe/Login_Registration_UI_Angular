import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserserviceService } from 'src/app/userservice.service';
const EMAIL_REGEX = new RegExp("^([a-zA-Z0-9+-])+(\\.?[a-zA-Z0-9_+-])*@[a-zA-Z0-9]+[.][a-zA-Z]{2,3}([.]?[a-zA-Z]{2,3})?$")

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  Register:FormGroup;
  constructor(
    private formBuilder:FormBuilder,
    private user: UserserviceService
  ) { 
    this.Register = formBuilder.group(
      {
        firstName: ['', [Validators.required], ],
        lastName: ['', [Validators.required], ],
        age: ['', [Validators.required], ],
        mobileNumber:['', [Validators.required], ],
        email: ['', [Validators.required, Validators.pattern(EMAIL_REGEX)]],
        password: ['', [Validators.required], ]
      }
    )
  }
  hide = true;
  ngOnInit(): void {
  }
  onSubmit(){
    if(this.Register.valid){
      console.log(this.Register.value);
      let Response = [] as any
      let Obj = {
        firstName:this.Register.value.firstName,
        lastName:this.Register.value.lastName,
        age:this.Register.value.age,
        mobileNumber:this.Register.value.mobileNumber,
        email:this.Register.value.email, 
        password:this.Register.value.password
      }
      console.log(Obj);

      this.user.registerService(Obj).subscribe((resp)=>{
        console.log(resp)
      }, (error) => {
        console.log(error);
      
      })
    }
  }
}
