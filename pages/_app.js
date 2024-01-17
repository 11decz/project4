import Head from "next/head"
import Layout from "../src/components/layouts/layout"
import '../styles/globals.css'

export default function App({ Component, pageProps }) {
  return (
   
    <Layout>
      <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Component {...pageProps} />
    </Layout>
  )
}
