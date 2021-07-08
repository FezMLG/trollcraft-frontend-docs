import Router from 'next/router';
import NProgress from 'nprogress'; //nprogress module
import 'nprogress/nprogress.css'; //styles of nprogress
import $ from 'jquery';

//Binding events. 
Router.events.on('routeChangeStart', () => NProgress.start()); 
Router.events.on('routeChangeComplete', () => NProgress.done()); 
Router.events.on('routeChangeError', () => NProgress.done());

import '../styles/buttons.scss'
import '../styles/forms.scss'
import '../styles/product.scss'
import selectButton from '../components/selectButton.js'
import navOpen from '../components/navopen.js'
import { useEffect } from 'react'
import '../styles/nav.scss'
import '../styles/homepage.scss'
import '../components/navopen.js'
import '../styles/modepage.scss'
import '../styles/shoppage.scss'



export default function App({ Component, pageProps }) {

  useEffect(() => {
    selectButton()
    navOpen()
  })

  return <Component {...pageProps} />
}
