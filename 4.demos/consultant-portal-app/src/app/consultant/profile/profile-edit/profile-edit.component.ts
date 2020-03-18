import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'cpa-profile-edit',
  templateUrl: './profile-edit.component.html',
  styleUrls: ['./profile-edit.component.css']
})
export class ProfileEditComponent implements OnInit {
  editProfile: FormGroup;
  names: FormControl;
  lastNames: FormControl;
  constructor() { }

  ngOnInit(): void {
    this.names = new FormControl();
    this.lastNames = new FormControl();
    this.editProfile = new FormGroup({
      names: this.names,
      lastNames: this.lastNames
    });
  }

  saveProfile(values) {
    console.log(values);
  }
}
