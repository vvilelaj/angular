import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService, UserInfoService, User } from 'src/app/core';
import { Router } from '@angular/router';

@Component({
  selector: 'cpa-profile-edit',
  templateUrl: './profile-edit.component.html',
  styleUrls: ['./profile-edit.component.css']
})
export class ProfileEditComponent implements OnInit {
  profileForm: FormGroup;
  userName: FormControl;
  names: FormControl;
  lastNames: FormControl;
  constructor(private authService: AuthService,
    private userInfoService: UserInfoService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.createFields();
    this.loadFields();
  }

  private createFields() {
    this.userName = new FormControl('', [Validators.required]);
    this.names = new FormControl('', [Validators.required]);
    this.lastNames = new FormControl('', [Validators.required]);
    this.profileForm = new FormGroup({
      userName: this.userName,
      names: this.names,
      lastNames: this.lastNames
    });
  }

  private loadFields() {
    this.authService.getUserIdentity().subscribe(x => {
      this.userName.setValue(x.userName);
      this.names.setValue(x.user.names);
      this.lastNames.setValue(x.user.lastNames);
    });
  }

  saveProfile() {
    this.userInfoService.set(this.userName.value, this.getUserInfo());
    this.router.navigate(['/consultant', 'profile']);
  }

  private getUserInfo(): User {
    return { names: this.names.value, lastNames: this.lastNames.value };
  }
}
