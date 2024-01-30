import {
  Button,
  Checkbox,
  FormControlLabel,
  FormGroup,
  Switch,
  TextField,
} from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

//!로그인
//?기능
//로그인 기능 구현 (아이디, 비밀번호 찾기 미구현)

//?내용
//아이디, 비밀번호 입력

export default function Index() {
  return (
    <>
      <article id="login">
        <section id="header">
          <div className="logo__box">
            <Link to="/">logo</Link>
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
        <section className="wrapper">
          <div className="title__line">
            <p className="title">
              <span className="cl-ch">로그인</span>이 필요한 서비스입니다.
            </p>
          </div>
          <div className="login__box">
            <FormGroup className="test">
              <div className="top__line">
                <FormControlLabel control={<Checkbox />} label="로그인 유지" />
                <FormControlLabel control={<Checkbox />} label="아이디 저장" />
                <FormControlLabel control={<Switch />} label="보안" />
              </div>
              <div className="login__line">
                <TextField
                  id="id"
                  label="아이디"
                  variant="outlined"
                  className="text-field"
                />
                <TextField
                  id="password"
                  label="비밀번호"
                  type="password"
                  variant="outlined"
                  className="text-field"
                />
              </div>
              <div className="button__line">
                <Button variant="contained">로그인</Button>
                <Button variant="contained">회원가입</Button>
              </div>
              <div className="sns__line">
                <p className="top__text">소셜 계정으로 간편 로그인</p>
                <ul>
                  <li>
                    <button className="sns-n">네이버</button>
                  </li>
                  <li>
                    <button className="sns-k">카카오톡</button>
                  </li>
                  <li>
                    <button className="sns-g">구글</button>
                  </li>
                  <li>
                    <button className="sns-f">페이스북</button>
                  </li>
                </ul>
              </div>
            </FormGroup>
          </div>
        </section>
        <div className="footer"></div>
      </article>
    </>
  );
}
