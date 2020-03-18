import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/services/auth.service';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'cpa-profile-info',
  templateUrl: './profile-info.component.html',
  styleUrls: ['./profile-info.component.css']
})
export class ProfileInfoComponent implements OnInit {
  profileForm: FormGroup;
  userName: FormControl;
  names: FormControl;
  lastNames: FormControl;

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.createFields();
    this.loadFields();
  }

  private createFields() {
    this.userName = new FormControl();
    this.names = new FormControl();
    this.lastNames = new FormControl();
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
}
