interface IProps {
  text: string;
  className?: string;
  type?: 'button' | 'submit';
  onClick?: React.MouseEventHandler;
  disabled?: boolean;
}

export const Button = ({ text, type, onClick, disabled, className }: IProps) => {
  return (
    <button className={className} type={type} onClick={onClick} disabled={disabled}>
      {text}
    </button>
  );
};
