import '../styles/globals.css'
import Layout from '../componets/layout'
import Head from 'next/head'


function MyApp({ Component, pageProps }) {
    return (
      <div>
      <Layout>
        <Head>
            <link rel='manifest' href='/manifest.json'/>
            <link rel='apple-touch-icon' href='/icon.png'/>
            <meta name='theme-color' content='#fff' />
        </Head>
        <Component {...pageProps} />
      </Layout>
      </div>
    )
}

export default MyApp
