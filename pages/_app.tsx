import { AppContext } from 'next/app'
import Head from 'next/head'
import React from 'react'
import { ThemeProvider } from 'styled-components'

import { Center } from '../components/Center'
import { Footer } from '../components/Footer'
import { Header } from '../components/Header'
import { GlobalStyle, theme } from '../shared/theme'
import { store } from '../store'

function App({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle theme={theme} />
      <Head>
        <title>What's next?!</title>
      </Head>
      <Header />
      <main className='main'>
        <Center>
          <Component {...pageProps} />
        </Center>
      </main>
      <Footer />
    </ThemeProvider>
  )
}

App.getInitialProps = async ({ Component, ctx }: AppContext) => ({
  pageProps: {
    ...(Component.getInitialProps ? await Component.getInitialProps(ctx) : {}),
  },
})

// we call page-level getInitialProps() this is required to correctly collect the data from the store
export default store.withRedux(App)
