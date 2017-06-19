import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the AppUserProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class AppUserProvider {

  constructor(public http: Http) {
    console.log('Hello AppUserProvider Provider');
  }
  
  baseUrl: string = "https://dillionssf-phortonssf.c9users.io/api/AppUsers?access_token=iAODHktLsBjpuGIWcRbVTWzj6wZxEobMbTisCNrU1nNPR1gMAR4fVCefDspWINyd"
  path: string = "/AppUserProvider"
  
  register(newUserData) {
    return this.http.post(
      this.baseUrl + this.path,
      newUserData
    );
  }

}
