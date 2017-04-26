/**
 * Created by tejas on 1/19/2017.
 */
import { Injectable } from '@angular/core';
import { Http, Response ,Headers} from '@angular/http';




@Injectable()
export class ApplicantMailService {
  constructor(private http: Http) {

  }
  sendApplicantMail(ApplicantData) {
    console.log("From Service" + JSON.stringify(ApplicantData));
    console.log(window.URL);
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append("Access-Control-Allow-Credentials","true");
    headers.append("Access-Control-Allow-Methods:"," GET, POST, PUT, DELETE, OPTIONS");
    headers.append("Access-Control-Allow-Headers"," Origin, X-Requested-With, Content-Type, Accept, Authorization");
    if(window.location.href=="https://hyr-fusion-dev.herokuapp.com/appli"){
      this.http.post('https://hyr-fusion-dev.herokuapp.com/applicant/send', ApplicantData, headers)
        .subscribe(
          () => { },
          err => console.error(err)
        )
    }
    else if(window.location.href=="http://hyr-fusion-dev.herokuapp.com/appli"){
      this.http.post('http://hyr-fusion-dev.herokuapp.com/applicant/send', ApplicantData, headers)
        .subscribe(
          () => { },
          err => console.error(err)
        )
    }
    else{
      this.http.post('http://localhost:1337/applicant/send', ApplicantData, headers)
        .subscribe(
          () => { },
          err => console.error(err)
        )
    }

  }
}


