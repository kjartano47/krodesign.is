import Document, { Html, Head, Main, NextScript, DocumentContext } from 'next/document'

export default class MyDocument extends Document<{ locale: string }> {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps, locale: ctx.locale ?? 'is' }
  }

  render() {
    return (
      <Html lang={this.props.locale}>
        <Head>
          <link rel="icon" href="/KR%C3%93Design-logo.svg" type="image/svg+xml" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
