import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className="bg-white dark:bg-slate-800 dark:text-white/80">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
