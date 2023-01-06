import React from 'react';
import colors, { ColorType } from "../colors";

type VariantType = 'filled' | 'light' | 'outline' | 'subtle' | 'default';

type ButtonProps = {
  color?: ColorType;
  children?: React.ReactNode;
  variant?: VariantType;
} & React.ButtonHTMLAttributes<HTMLButtonElement>

function B(props: ButtonProps) {
  const {
    color='blue',
    variant='default',
    children,
    ...rest
  } = props;

  const [isHover, setIsHover] = React.useState(false);

  const getStyles = React.useCallback((v: VariantType, c: ColorType) :React.CSSProperties => {
    switch(v) {
      case 'filled':
        return {
          backgroundColor: colors[c][6],
          color: colors.gray[0],
          border: `1px solid ${colors[c][6]}`,
        };
      case 'light':
        return {
          backgroundColor: colors[c][1],
          color: colors[c][9],
          border: `1px solid ${colors[c][1]}`,
        };
      case 'outline':
        return {
          backgroundColor: 'transparent',
          color: colors[c][6],
          border: `1px solid ${colors[c][6]}`,
        };
      case 'default':
        return {
          backgroundColor: 'transparent',
          color: colors.black,
          border: `1px solid ${colors.black}`,
        };
      case 'subtle':
        return {
          backgroundColor: isHover ? colors[c][1] : 'transparent',
          color: colors[c][6],
          border: '1px solid transparent',
        };
    }
  }, [isHover]);

  const styles: React.CSSProperties = React.useMemo(() => ({
    borderRadius: 4,
    padding: '8px 16px',
    fontWeight: 600,
    cursor: 'pointer',
    ...getStyles(variant, color),
  }), [isHover, variant, color]);

  const cls = React.useMemo(() => (
    `usine-button variant-${variant} color-${color}`
    + (rest.className ? ' ' + rest.className : '')
  ), [variant, color]);

  return (
    <button
      {...rest}
      className={cls}
      style={{ ...rest.style, ...styles }}
      onMouseOver={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      {children}
    </button>
  );
}

const Button = React.memo(B);

export { Button, type ButtonProps, type VariantType }
