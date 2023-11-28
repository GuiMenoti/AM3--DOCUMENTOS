import { limitText as limitTextFunction } from '../../utils/limitText';
import { StyledButtonWithIcon } from './ButtonWithIcon.style';

type ButtonWithIconProps = {
  children: string | JSX.Element;
  ismode?: boolean;
  icon?: JSX.Element;
  limitText?: boolean;
  type?: 'button' | 'submit' | 'reset';
  onClick?: () => void;
  disabled?: boolean;
};

export function ButtonWithIcon({
  children = '',
  ismode = false,
  icon,
  limitText = false,
  type = 'button',
  onClick,
  disabled = false,
}: ButtonWithIconProps) {
  return (
    <StyledButtonWithIcon
      type={type}
      variant="contained"
      startIcon={icon}
      // @ts-ignore
      mode={ismode.toString()}
      onClick={onClick}
      disabled={disabled}
    >
      {!limitText && typeof children === 'string'
        ? limitTextFunction(children)
        : children}
    </StyledButtonWithIcon>
  );
}
