import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { take } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class AuthService {
  public tokenUpdated$: Subject<string> = new Subject<string>()

  private token: string = null

  constructor(private httpClient: HttpClient) {
    
  }

  updateToken(): void {
    this
      .getToken()
      .pipe(
        take(1),
      )
      .subscribe((res: any) => {
        this.token = res.access_token
        this.tokenUpdated$.next(this.token)

        const expiresIn = +res.expires_in
        setTimeout(this.updateToken.bind(this), (expiresIn - 300) * 1000)
      })
  }

  private getToken(): Observable<any> {
    const options = {
      headers: {
        'Authorization': 'Basic ' + btoa(environment.spotify.clientId + ':' + environment.spotify.clientSecret),
        'Content-Type': 'application/x-www-form-urlencoded',
      }
    }

    const body = 'grant_type=client_credentials'

    return this.httpClient.post('https://accounts.spotify.com/api/token', body, options)
  }
}