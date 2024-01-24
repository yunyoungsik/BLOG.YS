import Link from 'next/link';
import React from 'react';

export default function SideBar() {
  return (
    <div className="detail__sideBar">
      <ul className="post">
        <li>
          <h3>새로 올라온 글</h3>
        </li>
        <li>
          <Link href="/">
            <p>글 제목 글 제목 글 제목 글 제목 글 제목 글 제목</p>
            <span>01/24</span>
          </Link>
        </li>
        <li>
          <Link href="/">
            <p>글 제목 글 제목 글 제목 글 제목 글 제목 글 제목</p>
            <span>01/24</span>
          </Link>
        </li>
        <li>
          <Link href="/">
            <p>글 제목 글 제목 글 제목 글 제목 글 제목 글 제목</p>
            <span>01/24</span>
          </Link>
        </li>
      </ul>
      <ul className="comment">
        <li>
          <h3>새로 올라온 댓글</h3>
        </li>
        <li>
          <Link href="/">
            <p>댓글 댓글 댓글 댓글 댓글 댓글 댓글 댓글 댓글 댓글 </p>
            <span>01/24</span>
          </Link>
        </li>
        <li>
          <Link href="/">
            <p>댓글 댓글 댓글 댓글 댓글 댓글 댓글 댓글 댓글 댓글 </p>
            <span>01/24</span>
          </Link>
        </li>
        <li>
          <Link href="/">
            <p>댓글 댓글 댓글 댓글 댓글 댓글 댓글 댓글 댓글 댓글 </p>
            <span>01/24</span>
          </Link>
        </li>
      </ul>
    </div>
  );
}
