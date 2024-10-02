import { makeAutoObservable } from 'mobx';

interface User {
  login: string;
  password: string;
}

class UserRegStore {
  userReg: User = { login: '', password: '' };

  constructor() {
    makeAutoObservable(this);
  }

  addUser({ login, password }: User) {
    this.userReg = { login, password };
  }

  removeUser() {
    this.userReg = { login: '', password: '' };
  }
}

export default new UserRegStore();
