import Document, { DocumentContext, Head, Html, Main, NextScript } from 'next/document'
import React from 'react'
import { ServerStyleSheet } from 'styled-components'

export default class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const sheet = new ServerStyleSheet()

    console.log('sheet', sheet)
    if (!sheet) return

    const originalRenderPage = ctx.renderPage

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) => sheet.collectStyles(<App {...props} />),
        })
      const initialProps = await Document.getInitialProps(ctx)
      console.log('initialProps', initialProps)
      if (!initialProps) return

      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      }
    } catch (error) {
      console.error(error)
    } finally {
      sheet.seal()
    }
  }

  render() {
    const description = 'The Next generation of a news feed'
    const fontsUrl = 'https://fonts.googleapis.com/css2?family=Permanent+Marker&display=swap'
    // Html, Head, Main and NextScript are required for the page to be properly rendred
    /**
     * HTML: is a root element
     * Main: is a component which will render pages
     * NextScript is a service component required for Next to work correctly
     */

    return (
      <Html>
        <Head>
          <meta name='description' content={description} />
          <link href={fontsUrl} ref='stylesheet' />
          {this.props.styles}
        </Head>

        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
