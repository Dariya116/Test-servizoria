import { Navigate, Route, Routes } from 'react-router-dom';
import { Home, Login } from '../pages';
import UserRegStore from '../store/user-login';
import { ProtectedRoute } from './protected-route';
import { Observer } from 'mobx-react-lite';

export const AppRouter = () => {
  return (
    <Observer>
      {() => {
        const login = UserRegStore.userLogin.login !== '';
        return (
          <Routes>
            <Route element={<ProtectedRoute isAllowed={login} />}>
              <Route path="/" element={<Home />} />
            </Route>
            <Route path="/login" element={<Login />} />
            <Route path="*" element={<Navigate to="/login" replace />} />
          </Routes>
        );
      }}
    </Observer>
  );
};
