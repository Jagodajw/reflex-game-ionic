import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { from, Observable, throwError } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { UserInfo } from '../view/auth-view/auth.interface';
import { StorageService } from './storage.service';

@Injectable()
export class TokenApiRestInterceptorService implements HttpInterceptor {
  constructor(private storage: StorageService) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    if (request.headers.get('Authorization') == null) {
      const userInfo: Promise<UserInfo> =
        this.storage.get<UserInfo>('userInfo');

      return from(userInfo).pipe(
        map((userInfo: UserInfo) =>
          !!userInfo?.jwt
            ? this.getRequestWithToken(request, userInfo.jwt)
            : request
        ),
        mergeMap((request: HttpRequest<unknown>) =>
          next.handle(request).pipe(
            catchError((error) => {
              return throwError(error);
            })
          )
        )
      );
    }

    return next.handle(request).pipe(
      catchError((error) => {
        return throwError(error);
      })
    );
  }

  private getRequestWithToken(request: HttpRequest<unknown>, token: string) {
    return request.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`,
      },
    });
  }
}
