import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store';
import { logoutUser } from 'src/app/store/actions/user/user.actions';
@Component({
  selector: 'app-user-logout',
  templateUrl: './user-logout.component.html',
  styleUrls: ['./user-logout.component.scss']
})
export class UserLogoutComponent implements OnInit {

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
  }
  logoutUser() {
    this.store.dispatch(logoutUser())
  }
}
