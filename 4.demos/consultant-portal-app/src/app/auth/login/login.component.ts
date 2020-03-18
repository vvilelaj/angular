import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';
import { Role } from 'src/app/core/models/auth/role';

@Component({
  selector: 'cpa-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    if (this.authService.isAuthenticated()) {
      this.redirectBasedOnRole(this.authService.getUserIdentity().roles);
    }
  }

  login(formValues) {
    this.authService.login(formValues.userName, formValues.password).subscribe((isLogged: boolean) => {
      if (!isLogged) {
        // todo : mensaje
      }
      this.redirectBasedOnRole(this.authService.getUserIdentity().roles);
    });
  }

  redirectBasedOnRole(roles: Role[]): void {
    if (roles.find(x => x.name === 'ADMIN')) {
      this.router.navigate(['/admin']);
    }
    if (roles.find(x => x.name === 'CONSULTANT')) {
      this.router.navigate(['/consultant']);
    }
  }
}
