import { Navigate, Outlet } from 'react-router-dom';

type PropsRoute = {
  isAllowed: boolean;
};

export const ProtectedRoute = ({ isAllowed }: PropsRoute) => {
  if (!isAllowed) {
    return <Navigate to='/login' replace/>;
  }
  return <Outlet />;
};
