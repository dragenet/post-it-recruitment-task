import Head from 'next/head';
import * as C from './constants';

export const SeoHead = ({ title, description, children }: C.SeoHeadProps) => (
  <Head>
    <title>{title ? `${title} - ${C.appName}` : C.appName}</title>
    <meta name="description" content={description || C.defaultAppDescription} />
    <link rel="icon" href="/favicon.ico" />

    {children}
  </Head>
);
