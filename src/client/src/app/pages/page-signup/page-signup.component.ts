import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from 'src/app/store';
import { loggedInUserSelector } from 'src/app/store/selectors/user/user.selectors';
import { User } from '../../../../../shared/models/user.model';

@Component({
  selector: 'app-page-signup',
  templateUrl: './page-signup.component.html',
  styleUrls: ['./page-signup.component.scss']
})
export class PageSignupComponent implements OnInit {
  loggedInUser$: Observable<User | null>;
  constructor(
    private store: Store<AppState>,
  ) {

    this.loggedInUser$ = this.store.select(loggedInUserSelector);
  }

  ngOnInit(): void {
  }

}
