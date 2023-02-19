import { AppBarProps } from '~/components/organisms/AppBar';

export interface DetailsLayoutProps {
  children?: JSX.Element | JSX.Element[];
  barButtons?: Pick<AppBarProps, 'leftButton' | 'rightButton'>;
}
