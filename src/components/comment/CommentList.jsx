"use client"

import React, { useState } from 'react'
import { useSession } from 'next-auth/react';
import useSWR, { mutate } from 'swr';
import moment from "moment";


const fetcher = async (url) => {
  const res = await fetch(url);
  const data = await res.json();

  if (!res.ok) {
    const error = new Error(data.message);
    throw error;
  }
  return data;
}

export default function CommentList({ postSlug }) {
  // console.log(postSlug)
  const { data: session, status } = useSession();
  const { data, mutate, isLoading } = useSWR(`http://localhost:3000/api/comment?slug=${postSlug}`, fetcher)
  // console.log(data);

  // 작성
  const [desc, setDesc] = useState("");

  const handleSubmit = async () => {
    const res = await fetch("/api/comment", {
      method: "POST",
      body: JSON.stringify({
        desc: desc,
        postSlug: postSlug,
      })
    })
    mutate()
    // console.log(res);
  }

  // 삭제
  const handleDelete = async (commentId) => {
    const confirmDelete = window.confirm("정말로 이 댓글을 삭제하시겠습니까?");
    if (confirmDelete) {
      try {
        const res = await fetch("/api/comment", {
          method: "DELETE",
          body: JSON.stringify({
            id: commentId,
          }),
        });
  
        if (res.ok) {
          alert("댓글이 삭제되었습니다.");
          mutate();
        } else {
          const deleteError = await res.json();
          alert(deleteError.message || "댓글 삭제 중 오류가 발생했습니다.");
        }
      } catch (error) {
        console.error(error);
        alert("댓글 삭제 중 오류가 발생했습니다.");
      }
    }
  };

  return (
    <div className="comment__list">
      <ul>
        {isLoading ? <div className='loading'></div> : data?.map((item) => (
          <li key={item.id}>
            <div className="comment__top">
              <div className="left">
                <div className="profill">
                  <img src={item.user.image} alt='profill' />
                </div>
                <div className="info">
                  <h3>{item.user.name}</h3>
                  <span>{moment(item.createdAt).format('YYYY/MM/DD')}</span>
                </div>
              </div>
              <div className="right">

                <div className="btn">
                  {item.user.email === session?.user.email ? (
                    <>
                      <button type='button'>수정</button>
                      <button type='button' onClick={() => handleDelete(item.id)}>삭제</button>
                    </>
                  ) : (null)}
                </div>
              </div>
            </div>
            <p>
              {item.desc}
            </p>
          </li>
        ))}
        {status === "authenticated" ? (
          <li className="comment__write">
            <form
            // action="/api/commentWrite"
            // method="POST"
            >
              <div className="comment__top">
                <div className="left">
                  <div className="profill">
                    <img src={session?.user.image} alt='profill' />
                  </div>
                  <div className="info">
                    <h3>{session?.user.name}</h3>
                    <span>새 게시물</span>
                  </div>
                </div>
                <div className="right">
                  <div className="btn">
                    <button type='button' onClick={handleSubmit}>게시</button>
                  </div>
                </div>
              </div>
              <label htmlFor="youConts" className="required blind">댓글 내용</label>
              <textarea name="content" id="youConts" maxLength={100} placeholder="댓글은 100글자까지 작성가능합니다." onChange={(e) => setDesc(e.target.value)} />
            </form>
          </li>
        ) : (null)}
      </ul>
    </div>
  )
}