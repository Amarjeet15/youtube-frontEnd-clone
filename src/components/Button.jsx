const Button = ({ icon, onClick, className, icon23, icon20 }) => {
  return (
    <button onClick={onClick} className={className}>
      {icon}
      {icon23 && icon23}
      {icon20 && icon20}
    </button>
  );
};

export default Button;
