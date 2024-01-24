"use client"

import Link from 'next/link'
import styles from './page.module.scss'

export default function join() {

  return (
    <main id="main">
      <div className={`container ${styles.join__inner}`}>
        <div className={styles.join__header}>
          <h3>Join</h3>
          <p>회원가입을 하시겠습니까?</p>
        </div>
        <form action='/api/auth/join' method='POST' className={styles.join}>
          <fieldset>
            <legend className='required blind'>회원가입 영역</legend>
            <div className='joinId'>
              <label htmlFor='youId'>아이디</label>
              <input type='text' name='youId' id='youId' placeholder='email@email.com' required />
            </div>

            <div className='joinPass'>
              <label htmlFor='youPass'>비밀번호</label>
              <input type='password' name='youPass' id='youPass' autoComplete='off' placeholder='비밀번호' required />
            </div>

            <div className='joinName'>
              <label htmlFor='youName'>이름</label>
              <input type='text' name='youName' id='youName' placeholder='이름' required />
            </div>

            <div className='joinBirth'>
              <label htmlFor='youBirth'>생년월일</label>
              <input type='text' name='youBirth' id='youBirth' placeholder='YYYYMMDD' maxLength={8} required />
            </div>
          </fieldset>

          <fieldset className={styles.checkbox__field}>
            <legend className='checkbox_group required blind'>약관</legend>

            <div className={styles.box01}>
              <div className={styles.box01__top}>
                <input type='checkbox' name='check_all' id='check_all' />
                <label htmlFor='check_all'>전체동의</label>
              </div>
              <p>
                위치기반 서비스 이용약관(선택), 마케팅 정보 수신 동의(이메일,SMS/MMS)(선택) 동의를 포함합니다.
              </p>
            </div>

            <div className={styles.box02}>
              <input type='checkbox' name='check_1' id='check_1' className='normal' />
              <label htmlFor='check_1'>
                <span>(필수)개인회원약관</span>
                <Link href="/">&gt;</Link>
              </label>
            </div>

            <div className={styles.box03}>
              <input type='checkbox' name='check_2' id='check_2' className='normal' />
              <label htmlFor='check_2'>
                <span>(필수)개인정보 수집 및 이용에 동의</span>
                <Link href="/">&gt;</Link>
              </label>
            </div>
          </fieldset>
          <button type='submit'>회원가입 완료</button>
        </form>
      </div>
    </main>
  )
}