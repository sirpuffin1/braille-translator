import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store';
import {
  createUser,
  loginUser,
  updateUser,
} from 'src/app/store/actions/user/user.actions';
import { User } from '../../../../../shared/models/user.model';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.scss']
})
export class UserLoginComponent implements OnInit {
  userLogin: FormGroup;
constructor(private fb: FormBuilder, private store: Store<AppState>){
  this.userLogin = this.fb.group({
    email: [
      '',
      Validators.compose([Validators.required, Validators.minLength(3)]),
    ],
    password: [
      '',
      Validators.compose([Validators.required, Validators.minLength(5)]),
    ],
  })
}
  ngOnInit(): void {
  }
  login() {
    this.store.dispatch(loginUser({ data: this.userLogin.value
    }))
  }
}
