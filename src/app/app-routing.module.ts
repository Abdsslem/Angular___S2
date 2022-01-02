import { NgModule } from '@angular/core';
import { Routes, RouterModule, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { ProfsComponent } from './profs/profs.component';
import { AddProfComponent } from './add-prof/add-prof.component';
import { UpdateProfComponent } from './services/update-prof/update-prof.component';
import { LoginComponent } from './login/login.component';
import { ProfGuard } from './prof.guard';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { AuthService } from './services/auth.service';


const routes: Routes = [
  { path: "profs", component: ProfsComponent },
  { path: "add-prof", component: AddProfComponent, canActivate: [ProfGuard] },
  { path: "updateProf/:id", component: UpdateProfComponent },
  { path: 'login', component: LoginComponent },
  { path: 'forbidden', component: ForbiddenComponent },
  //{path: 'app-forbidden', component: AddProfComponent,canActivate:[ProfGuard]},
  { path: "", redirectTo: "profs", pathMatch: "full" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  constructor(private authService: AuthService, private router: Router) { }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
    if (this.authService.isAdmin())
      return true;
    else {
      this.router.navigate(['forbidden']);
      return false;
    }
  }
}
