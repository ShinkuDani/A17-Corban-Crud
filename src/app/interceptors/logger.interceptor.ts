import { HttpInterceptorFn } from '@angular/common/http';

export const loggerInterceptor: HttpInterceptorFn = (req, next) => {
  
  const autReq = req.clone({
    headers: req.headers.set('Authorization', 'Bearer ')
    
    
  })
  return next(autReq);
};
