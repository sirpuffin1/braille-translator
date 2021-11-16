import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from 'src/app/store';
import { usersSelector, loggedInUserSelector } from 'src/app/store/selectors/user/user.selectors';
import { User } from '../../../../../shared/models/user.model';

@Component({
  selector: 'app-page-users',
  templateUrl: './page-users.component.html',
  styleUrls: ['./page-users.component.scss']
})
export class PageUsersComponent implements OnInit {
  users$: Observable<User[]>;
  loggedInUser$: Observable<User | null>;
  constructor(
    private store: Store<AppState>,
  ) {
    this.users$ = this.store.select(usersSelector);
    this.loggedInUser$ = this.store.select(loggedInUserSelector);
   }

  ngOnInit(): void {
  }

}
