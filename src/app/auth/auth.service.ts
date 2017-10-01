import { Router } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {
  token: boolean;

  constructor(private router: Router) {}

  isAuthenticated() {
    return this.token = true;
  }
}
