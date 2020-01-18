import React, { Component } from 'react';
import '../App.css';

class timetable extends Component {
  render() {
    return (
      <div>
        <div className='container'>
          <div className='box' >
            {/* 공지사항 */}
            <div className='notice'>
              <h3 className='notice_position'><img className = 'notice_icon' alt='#' src={require('../img/notice_icon.jpg')}/>공지사항</h3>
            </div>

            {/* 시간표 */}
            <div className='table_container'>
              
            </div>
            
            {/* 버튼 */}
            <div className='button_container'>
              <div className='button_container_cell'>
                <button className='store_button'> 저　　장 </button>
              </div>
              <div className='button_container_cell'>
                <button className='share_button'> 공　　유</button>
              </div>
            </div>
          </div>
          <div className='box' >
            {/* 강의찾기 */}
            <div className='find_lecture_container'>
              <h3 className='main_text'> 강의 찾기</h3>
              <hr className='main_line'/>
              <input type='text'
                className='find_lecture_textbox'
                placeholder='검색어를 입력하세요.'
              >
              </input>
              <img className = 'search_icon' alt='#' src={require('../img/search.png')}/>
              
              <div className = 'find_lecture_container_table'> 
                <div className = 'find_lecture_container_table_cell'>
                  <select className='select_box'>
                    <option>개설학부</option>
                    <option>컴공</option>
                    <option>기계</option>
                    <option>전전통</option>
                    <option>에신화</option>
                    <option>산경</option>
                    <option>메카</option>
                    <option>디공, 건축</option>
                    <option>교양</option>
                    <option>HRD</option>
                    <option>융합</option>
                  </select>
                </div>
                <div className = 'find_lecture_container_table_cell'>
                  <select className='select_box'>
                    <option>요　일</option>
                    <option>월</option>
                    <option>화</option>
                    <option>수</option>
                    <option>목</option>
                    <option>금</option>
                  </select>
                </div>
                <div className = 'find_lecture_container_table_cell'>
                  <select className='select_box'>
                    <option>학　점</option>
                    <option>0</option>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                  </select>
                </div>
                <div className = 'find_lecture_container_table_cell'>
                  <select className='select_box'>
                    <option>시　간</option>
                    <option>추후 추가</option>
                  </select>
                </div>
                <div className='find_lecture_container_table_cell'>
                  <h2>~</h2>
                </div>
                <div className = 'find_lecture_container_table_cell'>
                  <select className='select_box'>
                    <option>시　간</option>
                    <option>추후 추가</option>
                  </select>
                </div>
              </div>

              <div className='find_lecture_table'>
                
              </div>
            </div>

            {/* 나만의 시간표 추가 */}
            <div className='add_custom_container'>
              <h3 className='main_text'> 나만의 시간표 추가</h3>
              <hr className='main_line add_custom_hr'/>

              <div className='add_custom_container_table'>
                <div className='add_custom_container_table_cell'>
                  <select className='select_box add_custom_select'>
                    <option>요　일</option>
                  </select>
                </div>
                <div className='add_custom_container_table_cell'>
                  <select className='select_box add_custom_select'>
                    <option>시　간</option>
                  </select>
                </div>
                <div className='add_custom_container_table_cell'>
                  <h2>~</h2>
                </div>
                <div className='add_custom_container_table_cell'>
                  <select className='select_box add_custom_select'>
                    <option>시　간</option>
                  </select>
                </div>
                <div className='add_custom_container_table_cell'>
                  <input
                    type='text'
                    className='add_custom_textbox'
                    placeholder='이름을 입력해주세요. ex) 근장'
                  />
                </div>
                <div className='add_custom_container_table_cell'>
                  <button className='add_custom_button'>
                    추  가
                  </button>
                </div>
              </div>
            </div>
            {/* 장바구니 */}
            <div className='basket_container'>
              <h3 className='main_text'> 장바구니</h3>
              <hr className='main_line'/>
              
              <div className='basket_table'>

              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default timetable;
