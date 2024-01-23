import React from "react";
import { Link } from "react-router-dom";

//!홈페이지
//?기능
//로그인, 회원가입 - 해당페이지로 이동하여 각 기능 진행
//소비자, 판매자 페이지 이동
//공지사항, 새소식 - 해당페이지로 이동

//?내용
//*3가지 콘탠츠 포함
//-크라우드 펀딩 구조 및 서비스 설명
//-개인 홈, 판매자 홈 관리페이지 설명
//-공지사항, 새소식란 표기

export default function Index() {
  return (
    <>
      <article id="home">
        <section id="header">
          <div className="logo__box">
            <Link to="/">Logo</Link>
          </div>
          <div className="nav__box">
            <ul>
              <li>
                <Link to="/login">로그인</Link>
              </li>
              <li>
                <Link to="/signUp">회원가입</Link>
              </li>
              <li>
                <Link to="/login">마이페이지</Link>
              </li>
            </ul>
          </div>
        </section>
        <section id="main-section">
          <h1 className="section__title">
            펀딩의 모든 것<br />
            쉽고 간편하게
          </h1>
          <div className="login__box">
            <Link to="/login">로그인</Link>
          </div>
          <div className="nav__box">
            <ul>
              <li>
                <Link to="/login">회원가입</Link>
              </li>
              <li>
                <Link to="/signUp">아이디 찾기</Link>
              </li>
              <li>
                <Link to="/login">비밀번호 찾기</Link>
              </li>
            </ul>
          </div>
        </section>
        <section id="main-section">
          <h1 className="section__title">
            메이커의 모든 것<br />
            쉽고 간편하게
          </h1>
          <div className="login__box">
            <Link to="/login">로그인</Link>
          </div>
          <div className="nav__box">
            <ul>
              <li>
                <Link to="/login">회원가입</Link>
              </li>
              <li>
                <Link to="/signUp">아이디 찾기</Link>
              </li>
              <li>
                <Link to="/login">비밀번호 찾기</Link>
              </li>
            </ul>
          </div>
        </section>
        <section id="board-section">
          크라우드 펀딩 구조
        </section>
        <section id="board-section">
          홈/관리
        </section>
        <section id="notice-section">
          공지사항/새소식
        </section>
      </article>
    </>
  );
}
