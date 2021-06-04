import Head from 'next/head'
import Image from 'next/image'
import styles from './layout.module.css'
import utilStyles from '../styles/utils.module.scss'
import Link from 'next/link'

import "@fontsource/montserrat"
import "@fontsource/source-sans-pro"
import "@fontsource/lato"

import 'highlight.js/styles/vs2015.css'
import hljs from 'highlight.js/lib/core'
import javascript from 'highlight.js/lib/languages/javascript'
import css from 'highlight.js/lib/languages/css'
import html from 'highlight.js/lib/languages/xml'

hljs.registerLanguage('javascript', javascript)
hljs.registerLanguage('html', html)
hljs.registerLanguage('css', css)

hljs.highlightAll()

export const siteTitle = 'TrollCraft Design'

export default function Layout({ children, home }) {
  return (
    <div className={styles.container}>
      <main className={ styles.content }>{children}</main>
      {!home && (
        <div className={styles.backToHome}>
          <Link href="/">
            <a>← Back to home</a>
          </Link>
        </div>
      )}
    </div>
  )
}
