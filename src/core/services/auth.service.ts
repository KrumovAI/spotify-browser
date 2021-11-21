import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class TokenService {  
  public obtainingToken: boolean = false;
  public tokenUpdated: Subject<any> = new Subject<any>();
}