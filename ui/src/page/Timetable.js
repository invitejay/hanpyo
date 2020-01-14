import React, { Component } from 'react';
import '../App.css';

class timetable extends Component {
  render() {
    return (
      <div>
        <div className='container'>
          <div className='box' >
            <div className='notice'>
              <h3><img className = 'notice_icon' alt='#' src={require('../img/notice_icon.jpg')}/>공지사항</h3>
            </div>
          </div>
          <div className='box' >
            <h1> 오른쪽</h1>
          </div>
        </div>
      </div>
    );
  }
}

export default timetable;
