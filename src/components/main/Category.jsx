import Link from 'next/link'
import React from 'react'

const getData = async () => {
  const res = await fetch("http://localhost:3000/api/category", {
    cache: "no-store"
  })
  if (!res.ok) {
    throw new Error("error")
  }
  return res.json()
}

export default async function Category({cate}) {
  const data = await getData();
  // console.log(data);
  // console.log(`cate : ${cate}`);

  return (
    <ul className='cate'>
      <li className={!cate && 'active'}><Link href="/">All</Link></li>
      {data.map((item) => (
        <li key={item.id} className={cate === item.slug ? 'active' : ''}><Link href={`?cate=${item.slug}`}>{item.slug}</Link></li>
      ))}
    </ul>
  )
}
