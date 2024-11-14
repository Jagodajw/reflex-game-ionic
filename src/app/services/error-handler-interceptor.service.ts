import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable()
export class ErrorHandlerInterceptorService implements HttpInterceptor {
  constructor(private toastController: ToastController) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    return next.handle(request).pipe(
      catchError((httpResponseWithError) => {
        if (httpResponseWithError.status === 500)
          this.showErrorToast('Błąd serwera');
        else this.showErrorToast(httpResponseWithError.error.error.message);

        return throwError(httpResponseWithError);
      })
    );
  }

  private async showErrorToast(errorMessage: string) {
    const ref = await this.toastController.create({
      message: errorMessage,
      duration: 1500,
      position: 'top',
    });

    await ref.present();
  }
}
