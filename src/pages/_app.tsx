/** @format */

import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { Fira_Code } from '@next/font/google';

const firaCode = Fira_Code({ weight: '400', subsets: ['latin'] });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <style
        jsx
        global
      >{`
        html {
          font-family: ${firaCode.style.fontFamily};
        }
      `}</style>
      <Component {...pageProps} />
    </>
  );
}
