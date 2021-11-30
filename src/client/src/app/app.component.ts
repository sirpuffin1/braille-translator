import { Component } from '@angular/core';
import { SocketioService } from './services/socket.service';
import { loggedInUserSelector } from './store/selectors/user/user.selectors';
import { Observable } from 'rxjs';
import { AppState } from './store';
import { User } from '../../../shared/models/user.model';
import { Store } from '@ngrx/store';
import { logoutUser } from './store/actions/user/user.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  public loggedInUser$: Observable<User | null>;
  constructor(private store: Store<AppState>) {
    this.loggedInUser$ = this.store.select(loggedInUserSelector)
  }

  ngOnInit() {

  }
  logoutUser() {
    this.store.dispatch(logoutUser())
  }
}
