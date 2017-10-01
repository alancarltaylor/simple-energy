import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import { SharedService } from '../shared.service';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(public sharedService: SharedService, private router: Router) { }

  ngOnInit() {
  }

  onSubmit(f: NgForm) {
    console.log(f.value);  // { first: '', last: '' }
    this.sharedService.userInfo = f.value;
    console.log("sharedasdlkf: ", this.sharedService);
    this.router.navigate(['./confirmation']);
  }

}
