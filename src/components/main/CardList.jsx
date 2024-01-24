import React from 'react'
import Card from './Card'
import Pagenaion from './Pagenaion'


const getData = async (page, cate) => {
  const res = await fetch(`http://localhost:3000/api/post?page=${page}&cate=${cate || ''}`, {
    cache: "no-store"
  })
  if (!res.ok) {
    throw new Error("error")
  }
  return res.json()
}

export default async function List({page, cate}) {
  const {posts, count} = await getData(page, cate);
  const postView = 2;
  // console.log(posts);

  return (
    <div className="m_list">
      <div className='m_list__inner container'>
        {posts.map((item) => (
          <Card item={item} key={item.id} />
        ))}
      </div>
      <Pagenaion page={page} count={count} postView={postView} />
    </div>
  )
}
