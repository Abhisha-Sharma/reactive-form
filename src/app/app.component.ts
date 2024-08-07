import { Component } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'reactive-form';
  emailValidate="/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/"
  registerForm = new FormGroup({
    email: new FormControl("",[Validators.required,Validators.maxLength(32),Validators.pattern(this.emailValidate)]),
    password: new FormControl("",[Validators.required,Validators.maxLength(32),Validators.minLength(8)]),
    confirm_password: new FormControl("",[Validators.required,Validators.maxLength(32),Validators.minLength(8)])

  })
  
  getControl(name:any):AbstractControl|null{
    return this.registerForm.get(name)
  }
  toRegister(){
  localStorage.setItem("formvalue",JSON.stringify(this.registerForm.value))

  
    console.log(this.registerForm.value);
    this.clearInputs()
    
  }
  clearInputs(){
  this.registerForm.reset();
  }
 
}
