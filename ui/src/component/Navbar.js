import React, { Component } from 'react';
import '../App.css';
import { Link } from 'react-router-dom';

class Navbar extends Component {
  render() {
    return (
      <div className="nav_background_color">
        <div className="navigation">
          <div className="navigation_container">
            <Link to="/" className="link">
              <h1 className="logo"> 한표 </h1>
            </Link>
          </div>
          <div className="navigation_container">
              <Link to="/" className="link">
                <h2> 시간표 짜기 </h2>
              </Link>
          </div>
          <div className="navigation_container">
              <Link to="/review" className="link">
                <h2> 강의 후기 </h2>
              </Link>
          </div>
          <div className="navigation_container">
              <h2> 마이페이지 </h2>
          </div>
          <div className="navigation_container">
                <div className="navigation_container">
                  <h5 className="login_phrase"> 한표를 더 편리하게 이용하세요! </h5>
                  <button className="login_button">로 그 인</button>
                  <h5> 회 원 가 입 | 아 이 디 · 비 밀 번 호 찾 기 </h5>
                </div>
          </div>  
        </div>
      </div>
    );
  }
}

export default Navbar;