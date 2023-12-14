// src/pages/_app.js
import '../app/globals.css'
import { Component, AppProps } from 'next/app'

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp