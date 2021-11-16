import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { map } from 'rxjs/operators';
import { User } from '../../../../shared/models/user.model';
import { Translation } from '../../../../shared/models/translation.model'
import { userInfo } from 'os';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  selectedUserId = '';

  constructor(private api: ApiService) {}

  getUsers() {
    return this.api.get<{ data: User[] }>('users').pipe(map((res) => res.data));
  }
  createUser(user: User) {
    return this.api
      .post<{ data: User }, User>('create-user', user)
      .pipe(map((res) => res.data));
  }
  login(user: User) {
    return this.api
      .post<{ data: User }, User>('login', user)
      .pipe(map((res) => res.data));
  }

  logout() {
    return this.api
    .get('logout')
  }
  updateUser(user: User) {
    return this.api.put<User>('update-user/' + user._id, user);
  }

  deleteUser(user: User) {
    return this.api
      .delete<{ data: User }>('delete-user/' + user._id)
      .pipe(map((res) => res.data));
  }

  selectUser(id: string) {
    this.selectedUserId = id;
  }

  addTranslation(payload: {_id: string, message: string}) {
    return this.api.post<{data: User}, Translation>('add-translation', payload).pipe(map(res => res.data))
  }
}
