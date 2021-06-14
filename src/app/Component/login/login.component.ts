import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserserviceService } from 'src/app/userservice.service';
const EMAIL_REGEX = new RegExp("^([a-zA-Z0-9+-])+(\\.?[a-zA-Z0-9_+-])*@[a-zA-Z0-9]+[.][a-zA-Z]{2,3}([.]?[a-zA-Z]{2,3})?$")
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  Login:FormGroup;

  constructor(
    private formBuilder:FormBuilder,
    private user: UserserviceService,
    private router: Router
  ) { 
    this.Login = formBuilder.group(
      {
        email: ['', [Validators.required, Validators.pattern(EMAIL_REGEX)]],
        password: ['', [Validators.required], ]
      }
    )
  }
  hide = true;
  ngOnInit(): void {
   
  }
  onSubmit(){
    if(this.Login.valid){
      console.log(this.Login.value);
      let Response = [] as any
      let Obj = {
        email:this.Login.value.email, 
        password:this.Login.value.password
      }
      this.router.navigate(['/home']);
      console.log(Obj);

      this.user.loginService(Obj).subscribe((resp)=>{
        console.log(resp)
        Response = resp
        console.log(Response.token)
        localStorage.setItem('Token',Response.token);
      }, (error) => {
        console.log(error);
      
      })
    }
  }

}
