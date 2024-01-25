"use client"

import { useState } from 'react';
import styles from './page.module.scss';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

export default function page() {
  const modules = {
    toolbar: {
        container: [
          [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
          [{ 'font': [] }],
          [{ 'align': [] }],
          ['bold', 'italic', 'underline', 'strike', 'blockquote'],
          [{ 'list': 'ordered' }, { 'list': 'bullet' }, 'link'],
          [{ 'color': ['#000000', '#e60000', '#ff9900', '#ffff00', '#008a00', '#0066cc', '#9933ff', '#ffffff', '#facccc', '#ffebcc', '#ffffcc', '#cce8cc', '#cce0f5', '#ebd6ff', '#bbbbbb', '#f06666', '#ffc266', '#ffff66', '#66b966', '#66a3e0', '#c285ff', '#888888', '#a10000', '#b26b00', '#b2b200', '#006100', '#0047b2', '#6b24b2', '#444444', '#5c0000', '#663d00', '#666600', '#003700', '#002966', '#3d1466', 'custom-color'] }, { 'background': [] }],
          ['image', 'video'],
          ['clean']  
        ],
    }
}

  const [title, setTitle] = useState("");
  const [cateSlug, setCateSlug] = useState("");
  const [file, setFile] = useState("");
  const [desc, setDesc] = useState("");

  const handleSubmit = async () => {
    const res = await fetch("/api/postWrite", {
      method: "POST",
      body: JSON.stringify({
        title: title,
        desc: desc,
        slug: title,
        cateSlug: cateSlug || "javascript",
      })
    })
    // console.log(res);
  }

  return (
    <main id="main" className={styles.write}>
      <div className={`container ${styles.write__inner}`}>
        <div className={styles.write__header}>
          <h3>Write</h3>
          <p>글을 작성하시겠습니까?</p>
        </div>
        <form
          // action="/api/post/write"
          // method="POST"
          className={styles.write__form}
        >
          <fieldset>
            <legend className="blind">글쓰기 영역</legend>
            <div className={styles.cate}>
              <label htmlFor="youCate" className="required blind">
                카테고리
              </label>
              <select onChange={(e) => setCateSlug(e.target.value)}>
                <option>카테고리</option>
                <option value={"javascript"}>javascript</option>
                <option value={"html"}>html</option>
                <option value={"css"}>css</option>
              </select>
            </div>
            <div className={styles.title}>
              <label htmlFor="youTitle" className="required blind">
                제목
              </label>
              <input
                type="text"
                name="youTitle"
                id="youTitle"
                placeholder="제목"
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
            <ReactQuill
                theme='snow'
                modules={modules}
                value={desc}
                onChange={setDesc}
                placeholder='내용'
                className={styles.content}
              />
            {/* <div className={styles.content}>
              <label htmlFor="youCont" className="required blind">
                글 내용
              </label>
              <textarea name="youCont" id="youCont" placeholder="내용" />
            </div> */}
            <div className='file'>
              <label htmlFor='youFile' className='required blind'>파일</label>
              <input type='file' name='youFile' id='youFile' onChange={(e) => setFile(e.target.files[0])}></input>
            </div>
            <div className={styles.btn}>
              <button type="button" onClick={handleSubmit}>작성하기</button>
            </div>
          </fieldset>
        </form>
      </div>
    </main>
  );
}
