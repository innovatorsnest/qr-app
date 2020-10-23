import { HelperService } from './../../services/helper.service';
import { DataService } from './../../services/data.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

  user = {
    email: '',
    password: ''
  }

  constructor(
    private route: ActivatedRoute,
    private data: DataService,
    private router: Router,
    private helperService: HelperService,
  ) {

    this.route.params.subscribe((result) => {
      console.log('result', result);
      this.user.email = result['id'];
      this.user.password = result['password'];
    })


  }

  ngOnInit() {
    const token = localStorage.getItem('token');
    if (token) {
      this.router.navigate(['home']);
    } else {
      this.gettingLoginCredentials();
    }

  }

  gettingLoginCredentials() {
    const payload = {
      deviceId: '12345',
      userName: this.user.email,
      password: this.user.password
    }

    if (payload.userName === 'null') {
      console.log('Please scan the Qr Code');
    } else {
      this.helperService.presentLoader('Fetching Categories');

      console.log("%c login payload", "color: yellow", payload);

      this.data.getAccessTokenFromQr(payload).subscribe((response) => {
        console.log("%c response from login", "color: yellow", response);

        // saving the session token to the localstorage as of now
        localStorage.setItem('token', response["data"]["sessionToken"]);
        this.router.navigate(['home']);
      }, error => {
        console.log('error while getting the response', error);
      })
    }


  }



}
