import { FormikValues } from 'formik';

interface IProps {
  htmlFor: string;
  labelText: string;
  id: string;
  type: string;
  name: string;
  placeholder: string;
  formikValue: string;
  formik: FormikValues;
}

export const Input = ({
  htmlFor,
  id,
  labelText,
  name,
  placeholder,
  type,
  formik,
  formikValue,
}: IProps) => {
  return (
    <>
      <label htmlFor={htmlFor}>{labelText}</label>
      <input
        id={id}
        type={type}
        name={name}
        placeholder={placeholder}
        value={formikValue}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        disabled={formik.isSubmitting}
      />
    </>
  );
};
