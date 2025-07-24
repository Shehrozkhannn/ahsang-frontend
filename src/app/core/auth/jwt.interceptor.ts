import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
      console.log('Interceptor hit');
    const token = localStorage.getItem('access_token');
    console.log('Token in interceptor:', token);

    if (token) {
      req = req.clone({
        setHeaders: {
          Authorization: `Bearer ${token}`,
        },
      });
    }

     return next.handle(req).pipe(
      catchError((error: HttpErrorResponse) => {
        console.error('🚨 Error caught in interceptor:', error);
        if (error.status === 401) {
          console.warn('⚠️ Unauthorized - token may be invalid or expired');
        }
        return throwError(() => error);
      })
    );
  }
}