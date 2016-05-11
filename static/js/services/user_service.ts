import {Injectable} from 'angular2/core';
import {Http} from 'angular2/http';
import 'rxjs/add/operator/map'

@Injectable()
export class UserService {
  constructor(http:Http) {
    this.users = http.get('http://letsdate-crackerjack.rhcloud.com/api/users/all')
      .map(response => response.json());
  }
}
