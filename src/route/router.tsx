import { Route, Routes } from 'react-router-dom';
import { Home, Login } from '../pages';
import UserRegStore from '../store/user';
import { ProtectedRoute } from './ProtectedRoute';
import { Observer } from 'mobx-react-lite';

export const AppRouter = () => {
  return (
    <Observer>
      {() => {
        const login = UserRegStore.userReg.login !== '';
        console.log(login);
        return (
          <Routes>
            <Route element={<ProtectedRoute isAllowed={login} />}>
              <Route path="/" element={<Home />} />
            </Route>
            <Route path="/login" element={<Login />} />
            <Route path="*" element={<Login/>} />
          </Routes>
        );
      }}
    </Observer>
  );
};
