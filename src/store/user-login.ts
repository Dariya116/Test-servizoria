import { makeAutoObservable } from 'mobx';

interface UserLogin {
  login: string;
  password: string;
}

class UserLoginStore {
  userLogin: UserLogin = { login: '', password: '' };

  constructor() {
    makeAutoObservable(this);
  }

  addUser({ login, password }: UserLogin) {
    this.userLogin = { login, password };
  }

  removeUser() {
    this.userLogin = { login: '', password: '' };
  }
}

export default new UserLoginStore();
