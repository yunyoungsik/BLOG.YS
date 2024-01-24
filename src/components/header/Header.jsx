import React from 'react'
import Link from 'next/link'

// components
import Menu from './Menu'
import Theme from '../theme/Theme'
import Nav from './Nav'

export default function Header() {
  return (
    <header id="header" role="banner">
      <div className="header__inner container">
        <h1 className="logo">
          <Link href="/">
            BLOG.<span>YS</span>
          </Link>
        </h1>
        <Nav />
        <div className="header__btn">
          <Menu />
          <Theme />
        </div>
      </div>
    </header>
  )
}
