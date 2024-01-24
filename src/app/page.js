import React from 'react'
import Info from '@/components/main/Info'
import CardList from '@/components/main/CardList'

export default function Home({searchParams}) {
  const page = parseInt(searchParams.page || 1);
  const {cate} = searchParams;
  // console.log(cate)

  return (
    <main id='main'>
      <Info cate={cate} />
      <CardList page={page} cate={cate} />
    </main>
  )
}
