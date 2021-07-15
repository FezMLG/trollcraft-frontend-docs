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
import addInput from '../components/addInput.js'
import liveEditing from '../components/liveEditing.js'
import { useEffect } from 'react'
import '../styles/nav.scss'
import '../styles/homepage.scss'
import '../components/navopen.js'
import '../styles/modepage.scss'
import '../styles/shoppage.scss'
import '../styles/editing.scss'
import '../styles/playerSearching.scss'





export default function App({ Component, pageProps }) {

  useEffect(() => {
    selectButton()
    navOpen()
    addInput()
  })

  return <Component {...pageProps} />
}
