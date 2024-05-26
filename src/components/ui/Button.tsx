const Button = (props: React.HTMLAttributes<HTMLButtonElement>) => {
  return <button {...props}>{props.children}</button>;
};

export default Button;
