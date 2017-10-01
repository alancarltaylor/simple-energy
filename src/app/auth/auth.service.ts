import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { SharedService } from '../shared.service';

@Injectable()
export class AuthService {
  token: boolean;

  constructor(private router: Router, private sharedService: SharedService) {}

  isAuthenticated() {
    if (this.sharedService.userInfo.first !== ""){
      console.log("userinfo: ", this.sharedService.userInfo.first);

    return this.token = true;
  }
  }
}
