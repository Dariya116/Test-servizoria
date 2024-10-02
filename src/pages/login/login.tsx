import { useFormik } from 'formik';
import style from './login.module.scss';
import { useNavigate } from 'react-router-dom';
import { observer } from 'mobx-react-lite';
import UserRegStore from '../../store/user-login';
import { Button } from '../../components/ui';
import { Input } from '../../components/ui';

export interface FormValues {
  email: string;
  password: string;
}

export const Login = observer(() => {
  const navigate = useNavigate();
  const formik = useFormik<FormValues>({
    initialValues: {
      email: '',
      password: '',
    },
    validate: (values) => {
      const errors: Partial<FormValues> = {};
      if (!values.email) {
        errors.email = 'Поле обязательно для заполнения';
      } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
        errors.email = 'Некорректный email';
      }
      if (!values.password) {
        errors.password = 'Поле обязательно для заполнения';
      }
      return errors;
    },
    onSubmit: (values, { setSubmitting }) => {
      setTimeout(() => {
        UserRegStore.addUser({
          login: values.email,
          password: values.password,
        });
        navigate('/');
        setSubmitting(false);
      }, 1000);
    },
  });

  return (
    <div className={style.form}>
      <Input
        htmlFor='email'
        labelText='Введите email'
        id='email'
        type='email'
        name='email'
        placeholder='email'
        formik={formik}
        formikValue={formik.values.email}
      />

      <p>
        {formik.touched.email && formik.errors.email ? formik.errors.email : <span>&nbsp;</span>}
      </p>
      <Input
        htmlFor='password'
        labelText='Введите пароль'
        id='password'
        type='password'
        name='password'
        placeholder='password'
        formik={formik}
        formikValue={formik.values.password}
      />
      <p>
        {formik.touched.password && formik.errors.password ? (
          formik.errors.password
        ) : (
          <span>&nbsp;</span>
        )}
      </p>
      <Button
        type='submit'
        text='Войти'
        disabled={formik.isSubmitting || !formik.isValid}
        onClick={() => {
          formik.validateForm();
          formik.handleSubmit();
        }}
      />
    </div>
  );
});
