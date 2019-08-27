import { Component, OnInit } from '@angular/core';
import { FormGroup , FormControl, FormArray, Validators } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'dynamicform';
  userForm:FormGroup
  get name(){
  	return this.userForm.get('name');
  }
  constructor(){}


  ngOnInit(){
  	this.userForm = new FormGroup({
  		name:new FormControl('ram'),
  		age : new FormControl('29'),
  		hobbies: new FormArray([])
  	});
  }
  addHobby(){
  	(<FormArray>this.userForm.get('hobbies')).push(new FormControl(""));
  }
  submit() {
  	console.log("submit data ",this.userForm)
  }

}
