import { observer } from 'mobx-react-lite';
import UserRegStore from '../../store/user-login';
import { useNavigate } from 'react-router-dom';
import style from './home.module.scss';
import { Button } from '../../components/ui';

export const Home = observer(() => {
  const navigate = useNavigate();
  const handleLogout = () => {
    navigate('/login');
  };

  const login = UserRegStore.userLogin.login;

  return (
    <div className={style.header}>
      <h1>Добро пожаловать, {login}</h1>
      <Button type="button" onClick={handleLogout} text='выйти' />
    </div>
  );
});
