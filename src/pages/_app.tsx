import '~/src/styles/globals.css'
import type { AppProps } from 'next/app'
import { AppLayout } from '../components/layout/AppLayout'
import Head from 'next/head'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>nishi page</title>
        <meta name='description' content='nishi page' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <AppLayout>
        <Component {...pageProps} />
      </AppLayout>
    </>
  )
}
