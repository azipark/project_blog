import React from 'react';
import { Link } from 'react-router-dom';
interface PostLinkProps {
  hasNavigation?: boolean
}

export default function PostList({ hasNavigation = true }: PostLinkProps ) {
  return (
    <>
      {hasNavigation && (
        <div className="post__navigation">
          <div className="post__navigation--active">전체</div>
          <div>나의 글</div>
        </div>
      )}

      <div className="post__list">
        {[...Array(10)].map((e, index) => (
          <div key={index} className="post__box">
            <Link to={`/posts/${index}`}>
              <div className="post__profile-box">
                <div className="post__profile"></div>
                <div className="post__author-name">hy</div>
                <div className="post__date">2025.11.01</div>
              </div>
              <div className="post__title">게시글 {index}</div>
              <div className="post__text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum natus harum at voluptate tempora a optio perferendis ab nostrum minima aut beatae aliquam, voluptates itaque excepturi necessitatibus voluptas odit voluptatibus!
              </div>
              <div className="post__utils-box">
                <div className="post__delete">삭제</div>
                <div className="post__edit">수정</div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </>
  );
}