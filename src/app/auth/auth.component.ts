import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { authResponseData, AuthService } from './auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent {
isLoggedIn = true;
isLoading = false;
error:string = null;
  constructor(private authservice: AuthService,
              private router: Router) { }

  onSwitchMode(){
    this.isLoggedIn = !this.isLoggedIn;
  }

  onSubmit(form: NgForm){
    if(!form.valid){
      return;
    }
    const email = form.value.email;
    const password = form.value.password;

    let  authObs:Observable<authResponseData>;

    this.isLoading = true;

    if(this.isLoggedIn){
      authObs =  this.authservice.signIn(email, password);

    }
    else
    {
      authObs = this.authservice.signUp(email,password);
    }

      authObs.subscribe( resdata => {
        console.log(resdata);
        this.isLoading = false;
        this.router.navigate(['recipes']);
      }, errorMessage => {
        this.error = errorMessage;
        this.isLoading = false;
      });

      form.reset();
   
  }

}
