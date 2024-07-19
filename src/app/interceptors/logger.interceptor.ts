import { HttpInterceptorFn } from '@angular/common/http';

export const loggerInterceptor: HttpInterceptorFn = (req, next) => {
  
  const autReq = req.clone({
    headers: req.headers.set('Authorization', 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiN2QxMzA2ZTAtZTUxZS00ODY2LWEzZmQtZjM4MjE3ZGQ1MmIyIiwic2Vzc2lvbl9pZCI6ImZmYTM5NTI4LTMyYzUtNDg3My04YmY0LWFiMWI3ODUwNDUyNiIsInNpZ25hbF9pZCI6ImVlY2Y0NDZmLWM1ZGEtNDAwMS1hYjE4LTIyMWZlODYzYjhmZiIsImhvc3QiOiJodHRwczovL2FwaTQuYWppbi5pby9pbmRleC5odG1sIiwiaXAiOiIxOTEuMTgzLjM4LjQyIiwibmJmIjoxNzIxMzU1Mjg5LCJleHAiOjE3MjE0NDE2ODksImlhdCI6MTcyMTM1NTI4OX0.cqPQz91jEwrDQpomZiXDDOwfajr0vilcbyE-xonJps0')
    
    
  })
  return next(autReq);
};
