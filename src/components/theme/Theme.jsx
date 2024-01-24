"use client"
import React, { useContext } from 'react'
import Image from 'next/image'
import { ThemeContext } from '@/context/ThemeContext'

export default function Theme() {
    const { toggle, theme } = useContext(ThemeContext)

    return (
        <div className='header__theme' onClick={toggle}>
            <Image src="/moon.svg" alt="어두운 버전" width={24} height={24} />
            <span className='ball' style={
                theme === "dark" ? { left: 2 } : { right: 2 }
            }></span>
            <Image src="/sun.svg" alt="밝은 버전" width={24} height={24} />
        </div>
    )
}