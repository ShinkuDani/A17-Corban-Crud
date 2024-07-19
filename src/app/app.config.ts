import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { CustomerServicesService } from './services/customer-services.service';
import { HttpClient, provideHttpClient, withInterceptors } from '@angular/common/http';
import { loggerInterceptor } from './Interceptors/logger.interceptor';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
     provideClientHydration(),
      provideAnimationsAsync(),
      provideHttpClient(
        withInterceptors([loggerInterceptor])
      ),
       CustomerServicesService,
        HttpClient ]
};
