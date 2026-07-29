import Document, { Html, Head, Main, NextScript, DocumentContext } from 'next/document'

const noFlashThemeScript = `(function(){try{var d=localStorage.getItem('theme')==='dark';var r=document.documentElement;if(d)r.classList.add('dark');r.style.colorScheme=d?'dark':'light';var m=document.querySelector('meta[name="theme-color"]');if(m&&d)m.setAttribute('content','#171717');}catch(e){}})();`

export default class MyDocument extends Document<{ locale: string }> {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps, locale: ctx.locale ?? 'is' }
  }

  render() {
    return (
      <Html lang={this.props.locale}>
        <Head>
          <meta name="theme-color" content="#ffffff" />
          <script dangerouslySetInnerHTML={{ __html: noFlashThemeScript }} />
          <link rel="icon" href="/favicon.ico" sizes="any" />
          <link rel="icon" href="/KR%C3%93Design-logo.svg" type="image/svg+xml" />
          <link rel="icon" href="/favicon-32x32.png" type="image/png" sizes="32x32" />
          <link rel="icon" href="/favicon-16x16.png" type="image/png" sizes="16x16" />
          <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
          <link rel="manifest" href="/site.webmanifest" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
