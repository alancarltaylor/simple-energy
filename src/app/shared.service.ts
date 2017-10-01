import { Injectable } from '@angular/core';

@Injectable()
export class SharedService {
  userInfo: {first: string, last: string, email: string};
  constructor() { }

}
