import React from 'react'
import Link from 'next/link'

export default function Nav() {
  return (
    <nav className='nav desktop' role="navigation" aria-label="메인 메뉴">
      <ul>
        <li>
          <Link href="/">
            HOME
          </Link>
        </li>
        <li>
          <Link href="/">
            NOTICE
          </Link>
        </li>
        <li>
          <Link href="/">
            ABOUT
          </Link>
        </li>
      </ul>
    </nav>
  )
}
