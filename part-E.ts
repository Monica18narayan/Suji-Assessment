// E1. [8 marks]
// Write a functional guard authGuard: CanActivateFn that injects an AuthService (exposing isLoggedIn:
// Signal<boolean>) and the Router. If logged in, allow navigation; otherwise return a UrlTree redirecting to
// /login with a returnUrl query param. Then write the lazy-loaded route config that protects /dashboard with
// it.
import { inject } from `@angular/core`
import {CanActivateFn,Router} from '@angular/router'
function authguard(): CanActivateFn {
    Service = inject(AuthService);
    Router = inject(Router);
    if (Service.isLoggedIn()) {
         return true; 
        } else { 
            return Router.createUrlTree(['/login']), queryParams: { returnUrl: Router.url };
         }
}

//Authguard is used to protect the url 
//Ex: if a user logged-in then only the user navigate to dashboard and other UI ,otherwise goes into login page

// E2. [7 marks]
// Write a functional interceptor authInterceptor: HttpInterceptorFn that: (a) adds Authorization: Bearer
// &lt;token&gt; from an injected TokenService (skip when there is no token); (b) retries failed GET requests up to 2
// times with a 500 ms delay; (c) on a 401 response, calls authService.logout() and rethrows. Show how you
// register it with provideHttpClient(withInterceptors([...])).

 authInterceptor: HttpInterceptorFn {
    Service = inject(TokenService);
    if(Service.getToken()){
        
    }
 }






