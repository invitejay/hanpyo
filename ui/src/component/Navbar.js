import React, { Component } from 'react';
import '../App.css';
import { Link } from 'react-router-dom';

class Navbar extends Component {
  render() {
    return (
      <div>
        <div className="navigation">
          <div className="navigation_container1">
            <ul>
              <Link to="/" className="link">
                <li className="logo"> 한표 </li>
              </Link>
              <Link to="/" className="link">
                <li> 시간표 짜기 </li>
              </Link>
              <Link to="/review" className="link">
                <li> 강의 후기 </li>
              </Link>
              <li> 마이페이지 </li>
            </ul>
          </div>
          <div className="navigation_container2">
            <h5 className="login_phrase"> 한표를 더 편리하게 이용하세요! </h5>
            <button className="login_button">로 그 인</button>
            <h5> 회 원 가 입 | 아 이 디 · 비 밀 번 호 찾 기 </h5>
          </div>
        </div>
      </div>
    );
  }
}

export default Navbar;