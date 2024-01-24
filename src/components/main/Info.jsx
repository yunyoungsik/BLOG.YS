import React from 'react'
import Link from 'next/link'
import Category from './Category'

export default function Info({cate}) {
  return (
    <div className="m_info">
      <div className='m_info__inner container'>
        <span className='deco'>
          INFO
        </span>
        <div className="m_info__top">
          <h2>
            Blog
          </h2>
          <div className="icon">
            <Link href="https://github.com/yunyoungsik" target='_blank'>
              <svg fill="#000000" viewBox="-2.5 0 19 19" xmlns="http://www.w3.org/2000/svg" className="cf-icon-svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M9.464 17.178a4.506 4.506 0 0 1-2.013.317 4.29 4.29 0 0 1-2.007-.317.746.746 0 0 1-.277-.587c0-.22-.008-.798-.012-1.567-2.564.557-3.105-1.236-3.105-1.236a2.44 2.44 0 0 0-1.024-1.348c-.836-.572.063-.56.063-.56a1.937 1.937 0 0 1 1.412.95 1.962 1.962 0 0 0 2.682.765 1.971 1.971 0 0 1 .586-1.233c-2.046-.232-4.198-1.023-4.198-4.554a3.566 3.566 0 0 1 .948-2.474 3.313 3.313 0 0 1 .091-2.438s.773-.248 2.534.945a8.727 8.727 0 0 1 4.615 0c1.76-1.193 2.532-.945 2.532-.945a3.31 3.31 0 0 1 .092 2.438 3.562 3.562 0 0 1 .947 2.474c0 3.54-2.155 4.32-4.208 4.548a2.195 2.195 0 0 1 .625 1.706c0 1.232-.011 2.227-.011 2.529a.694.694 0 0 1-.272.587z"></path></g></svg>
            </Link>
          </div>
        </div>
        <p>
          내용이 들어갈 자리 내용이 들어갈 자리 <span>내용이</span> 들어갈 자리<br />
          내용이 들어갈 자리 <span>내용이</span> 들어갈 자리
        </p>
        <div className="m_info__bottom">
          <form action='/api/search' method='POST'>
            <fieldset className='search'>
              <legend className='blind'>
                검색 영역
              </legend>
              <label className='blind'>검색</label>
              <div>
                <input name='search' placeholder="Search" />
                <button type='submit'>
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M16.6725 16.6412L21 21M19 11C19 15.4183 15.4183 19 11 19C6.58172 19 3 15.4183 3 11C3 6.58172 6.58172 3 11 3C15.4183 3 19 6.58172 19 11Z" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path> </g></svg>
                </button>
              </div>
            </fieldset>
            <Category cate={cate} />
          </form>
        </div>
      </div>
    </div>
  )
}
