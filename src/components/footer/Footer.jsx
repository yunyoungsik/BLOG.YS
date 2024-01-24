import React from 'react'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer id="footer">
      <div className="footer__inner container">
        <nav className="f_nav">
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
        <h2 className="f_logo">
          <Link href="/">
            BLOG.<span>YS</span>
          </Link>
        </h2>
        <div className="f_copyright">
          <p>ⓒ 2023.0-Sik All right reserverd</p>
        </div>
      </div>
    </footer>
  )
}
