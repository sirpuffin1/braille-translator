import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TranslationsListComponent } from './components/translations-list/translations-list.component';
import { AuthGuard } from './guards/auth.guard';
import { PageHomeComponent } from './pages/page-home/page-home.component';
import { PageLoginComponent } from './pages/page-login/page-login.component';
import { PageSignupComponent } from './pages/page-signup/page-signup.component';
import { PageUsersComponent } from './pages/page-users/page-users.component';

const routes: Routes = [
  {path: 'signup', component: PageSignupComponent},
  {path: 'login', component: PageLoginComponent},
  {path: '', component: PageHomeComponent},
  {path: 'users', component: PageUsersComponent, canActivate: [AuthGuard], resolve: []},
  {path: 'translations', component: TranslationsListComponent, canActivate: [AuthGuard], resolve: []}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
