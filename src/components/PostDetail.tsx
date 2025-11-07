import React from 'react';

export default function PostDetail() {
  return <>
    <div className="post__detail">
      <div className="post__box">
        <div className="post__title">Lorem ipsum dolor sit</div>
        <div className="post__profile-box">
          <div className="post__profile"></div>
          <div className="post__author-name">hy</div>
          <div className="post__date">2025.11.01</div>
        </div>
        <div className="post__utils-box">
          <div className="post__delete">삭제</div>
          <div className="post__edit">수정</div>
        </div>
        <div className="post__text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum natus harum at voluptate tempora a optio perferendis ab nostrum minima aut beatae aliquam, voluptates itaque excepturi necessitatibus voluptas odit voluptatibus!
        </div>
      </div>
    </div>
  </>
}