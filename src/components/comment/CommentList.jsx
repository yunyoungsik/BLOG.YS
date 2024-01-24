import CommentWrite from "./CommentWrite";

export default function CommentList() {
    return (
        <div className="comment__list">
            <ul>
                <li>
                    <div className="comment__top">
                        <div className="left">
                            <div className="profill">
                                <img src="https://images.unsplash.com/photo-1488161628813-04466f872be2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fG1hbnxlbnwwfHwwfHx8MA%3D%3D" alt='profill' />
                            </div>
                            <div className="info">
                                <h3>UserName</h3>
                                <span>10분전</span>
                            </div>
                        </div>
                        <div className="right">
                            <div className="btn">
                                <button type='button'>수정</button>
                                <button type='button'>삭제</button>
                            </div>
                        </div>
                    </div> 
                    <p>
                        댓글 내용이 들어갑니다.댓글 내용이 들어갑니다.댓글 내용이 들어갑니다.
                    </p>
                </li>

                <li>
                    <div className="comment__top">
                        <div className="left">
                            <div className="profill">
                                <img src="https://images.unsplash.com/photo-1488161628813-04466f872be2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fG1hbnxlbnwwfHwwfHx8MA%3D%3D" alt='profill' />
                            </div>
                            <div className="info">
                                <h3>UserName</h3>
                                <span>10분전</span>
                            </div>
                        </div>
                        <div className="right">
                            
                        </div>
                    </div> 
                    <p>
                        댓글 내용이 들어갑니다.댓글 내용이 들어갑니다.댓글 내용이 들어갑니다.
                        댓글 내용이 들어갑니다.댓글 내용이 들어갑니다.댓글 내용이 들어갑니다.
                    </p>
                </li>
                <CommentWrite />
            </ul>
        </div>
    )
}