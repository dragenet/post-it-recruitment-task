import { AppBarProps } from '~/components/molecules/AppBar';

export interface DetailsLayoutProps {
  children?: JSX.Element | JSX.Element[];
  barButtons?: Pick<AppBarProps, 'leftButton' | 'rightButton'>;
}
