export interface SeoHeadProps {
  title?: string;
  description?: string;
  children?: JSX.Element | JSX.Element[];
}

export const appName = process.env.NEXT_PUBLIC_APP_NAME;
export const defaultAppDescription = process.env.NEXT_PUBLIC_APP_DESCRIPTION;
