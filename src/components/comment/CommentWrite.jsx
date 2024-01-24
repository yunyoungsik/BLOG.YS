export default function CommentWrite() {
    return (
        <li className="comment__write">
            <form action="/api/comment/write" method="POST">
                <div className="comment__top">
                    <div className="left">
                        <div className="profill">
                            <img src="https://images.unsplash.com/photo-1488161628813-04466f872be2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fG1hbnxlbnwwfHwwfHx8MA%3D%3D" alt='profill' />
                        </div>
                        <div className="info">
                            <h3>UserName</h3>
                            <span>새 게시물</span>
                        </div>
                    </div>
                    <div className="right">
                        <div className="btn">
                            <button type='submit'>게시</button>
                        </div>
                    </div>
                </div>
                <label htmlFor="youConts" className="required blind">댓글 내용</label>
                <textarea name="content" id="youConts" placeholder="댓글을 작성해주세요." />
            </form>
        </li>
    )
}