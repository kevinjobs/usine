import React from 'react';
import './style.css';

type ButtonProps = {
  type?: string;
  children?: React.ReactNode;
} & Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'type'>

function Button(props: ButtonProps) {
  const { type: buttonType = 'default', children, ...rest } = props;

  const cls = `usine-button button-${buttonType}`;

  const styles: React.CSSProperties[] = [{}];

  rest.style = {...rest.style, ...styles[0]};

  return <button className={cls} {...rest}>{children}</button>;
}

export { type ButtonProps, Button }
