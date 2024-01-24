"use client"

import React from 'react'
import Link from 'next/link';
import { signOut, useSession } from 'next-auth/react';

export default function Menu() {
  // const status = "unauthenticated";
  // const name = "테스트";
  const {data: session, status} = useSession();

  return (
    <>
      <ul className='header__btn'>
        {status === "authenticated" ? (
          <>
            <li className="profill">
              <div className="img">
                <img src={session.user.image} alt="profill" />
              </div>
            </li>
            <li className='name'><span>{session.user.name}</span>님 반갑습니다.</li>
            <li className='login'><span onClick={signOut}>Logout</span></li>
          </>
        ) : (
          <>
            <li className="login">
              <Link href="/login">Login</Link>
            </li>
            <li className="join">
              <Link href="/join">Join</Link>
            </li>
          </>
        )}
      </ul>
    </>

  )
}
