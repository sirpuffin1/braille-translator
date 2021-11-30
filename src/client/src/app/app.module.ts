import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersListComponent } from './components/users-list/users-list.component';
import { UserSignupComponent } from './components/user-signup/user-signup.component';
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import * as fromUser from './store/reducers/user/user.reducer';
import { EffectsModule } from '@ngrx/effects';
import { UserEffects } from './store/effects/user/user.effects';
import { PageUsersComponent } from './pages/page-users/page-users.component';
import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';
import { PageSignupComponent } from './pages/page-signup/page-signup.component';
import { UserLoginComponent } from './components/user-login/user-login.component';
import { PageLoginComponent } from './pages/page-login/page-login.component';
import { ButtonDisplayComponent } from './components/button-display/button-display.component';
import { PageHomeComponent } from './pages/page-home/page-home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card'
import { MatButtonModule } from '@angular/material/button';
import { UserLogoutComponent } from './components/user-logout/user-logout.component';
import { TranslationsListComponent } from './components/translations-list/translations-list.component';
import { NbThemeModule, NbLayoutModule, NbCardModule, NbButtonModule, NbInputModule, NbIconModule } from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons'

const config: SocketIoConfig = { url: 'http://localhost:3000', options: {} };

@NgModule({
  declarations: [
    AppComponent,
    UsersListComponent,
    UserSignupComponent,
    PageUsersComponent,
    PageSignupComponent,
    UserLoginComponent,
    PageLoginComponent,
    ButtonDisplayComponent,
    PageHomeComponent,
    UserLogoutComponent,
    TranslationsListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    StoreModule.forRoot(reducers, { metaReducers }),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    StoreModule.forFeature(fromUser.userFeatureKey, fromUser.reducer),
    EffectsModule.forRoot([UserEffects]),
    SocketIoModule.forRoot(config),
    MatCardModule,
    MatButtonModule,
    BrowserAnimationsModule,
    NbThemeModule.forRoot({ name: 'cosmic' }),
    NbLayoutModule,
    NbEvaIconsModule,
    NbCardModule,
    NbButtonModule,
    NbInputModule,
    NbEvaIconsModule,
    NbIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
