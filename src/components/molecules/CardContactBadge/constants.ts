import { ComponentType } from 'react';

export interface CardContactBadgeProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  icon: ComponentType<any>;
  children: string | JSX.Element;
}
