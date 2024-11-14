import { HttpClient } from '@angular/common/http';
import { Injectable, Optional } from '@angular/core';
import { HTTP } from '@awesome-cordova-plugins/http/ngx';
import { Platform } from '@ionic/angular';
import { environment } from 'src/environments/environment';

@Injectable({ providedIn: 'root' })
export class HttpService {
  private readonly BASE_PATH: string = '';

  constructor(
    @Optional() private readonly mobileHttp: HTTP,
    private readonly webHttp: HttpClient,
    private readonly platform: Platform
  ) {
    this.BASE_PATH = environment.rootUrl;
  }

  public post<ReturnData, Body>(
    url: string,
    body: Body,
    headers: any = {}
  ): Promise<ReturnData> {
    const fullUrl: string = `${this.BASE_PATH}/${url}`;

    if (this.isMobile) {
      return this.mobileHttp
        .post(fullUrl, body, headers)
        .then((data) => data.data as ReturnData);
    } else {
      return this.webHttp
        .post<ReturnData>(fullUrl, body, { headers })
        .toPromise();
    }
  }

  public get<ReturnData>(url, headers: any = {}): Promise<ReturnData> {
    const fullUrl: string = `${this.BASE_PATH}/${url}`;

    if (this.isMobile) {
      return this.mobileHttp
        .get(fullUrl, {}, headers)
        .then((data) => data.data as ReturnData);
    } else {
      return this.webHttp.get<ReturnData>(fullUrl, { headers }).toPromise();
    }
  }

  public put<ReturnData, Body>(
    url: string,
    body: Body,
    headers: any = {}
  ): Promise<ReturnData> {
    const fullUrl: string = `${this.BASE_PATH}/${url}`;

    if (this.isMobile) {
      return this.mobileHttp
        .put(fullUrl, body, headers)
        .then((data) => data.data as ReturnData);
    } else {
      return this.webHttp
        .put<ReturnData>(fullUrl, body, { headers })
        .toPromise();
    }
  }

  public delete<ReturnData>(
    url: string,
    headers: any = {}
  ): Promise<ReturnData> {
    const fullUrl: string = `${this.BASE_PATH}/${url}`;

    if (this.isMobile) {
      return this.mobileHttp
        .delete(fullUrl, {}, headers)
        .then((data) => data.data as ReturnData);
    } else {
      return this.webHttp.delete<ReturnData>(fullUrl, { headers }).toPromise();
    }
  }

  private get isMobile(): boolean {
    return this.platform.is('cordova');
  }
}
