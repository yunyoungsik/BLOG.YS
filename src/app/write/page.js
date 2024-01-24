import styles from './page.module.scss';

export default function page() {
  return (
    <main id="main" className={styles.write}>
      <div className={`container ${styles.write__inner}`}>
        <div className={styles.write__header}>
          <h3>Write</h3>
          <p>글을 작성하시겠습니까?</p>
        </div>
        <form
          action="/api/notice/write"
          method="POST"
          className={styles.write__form}
        >
          <fieldset>
            <legend className="blind">글쓰기 영역</legend>
            <div className={styles.cate}>
              <label htmlFor="youCate" className="required blind">
                카테고리
              </label>
              <select>
                <option>카테고리</option>
                <option>공지사항</option>
                <option>자유</option>
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
              />
            </div>
            <div className={styles.content}>
              <label htmlFor="youCont" className="required blind">
                글 내용
              </label>
              <textarea name="youCont" id="youCont" placeholder="내용" />
            </div>
            <div className={styles.btn}>
              <button type="submit">작성하기</button>
            </div>
          </fieldset>
        </form>
      </div>
    </main>
  );
}
