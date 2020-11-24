import React from 'react';
import { ServerStyleSheet } from 'styled-components'
import Document, { Head, Main, NextScript, DocumentContext, Html } from 'next/document';
import { DocumentInitialProps, RenderPage } from 'next/dist/next-server/lib/utils';

export default class MyDocument extends Document {

    static async getInitialProps(ctx: DocumentContext) {
        const sheet: ServerStyleSheet = new ServerStyleSheet();
        const originalRenderPage: RenderPage = ctx.renderPage;
        try {
            ctx.renderPage = () =>
                originalRenderPage({
                    enhanceApp: (App) => (props) => sheet.collectStyles(<App {...props} />)
                });
            const initialProps: DocumentInitialProps = await Document.getInitialProps(ctx);

            return {
                ...initialProps,
                styles: (
                    <>
                        {initialProps.styles}
                        {sheet.getStyleElement()}
                    </>
                )
            }
        } catch (error) {
            console.error(error);
        } finally {
            sheet.seal()
        }
    }

    render() {
        const description = "The Next generation of a news feed"
        const fontsUrl = "https://fonts.googleapis.com/css2?family=Permanent+Marker&display=swap"
        // Html, Head, Main and NextScript are required for the page to be properly rendred
        /**
         * HTML: is a root element
         * Main: is a component which will render pages
         * NextScript is a service component required for Next to work correctly
         */

        return (
            <Html>
                <Head>
                    <meta name="description" content={description} />
                    <link href={fontsUrl} ref="stylesheet" />
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