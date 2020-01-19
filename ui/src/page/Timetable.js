import React, { Component } from 'react';
import '../App.css';

const WEEK_NAME = ["월요일", "화요일", "수요일", "목요일", "금요일"];

const TIME = [
  { time_name: "01A", clock_name: "09:00"},
  { time_name: "01B", clock_name: "09:30"},
  { time_name: "02A", clock_name: "10:00"},
  { time_name: "02B", clock_name: "10:30"},
  { time_name: "03A", clock_name: "11:00"},
  { time_name: "03B", clock_name: "11:30"},
  { time_name: "04A", clock_name: "12:00"},
  { time_name: "04B", clock_name: "12:30"},
  { time_name: "05A", clock_name: "13:00"},
  { time_name: "05B", clock_name: "13:30"},
  { time_name: "06A", clock_name: "14:00"},
  { time_name: "06B", clock_name: "14:30"},
  { time_name: "07A", clock_name: "15:00"},
  { time_name: "07B", clock_name: "15:30"},
  { time_name: "08A", clock_name: "16:00"},
  { time_name: "08B", clock_name: "16:30"},
  { time_name: "09A", clock_name: "17:00"},
  { time_name: "09B", clock_name: "17:30"},
]

const test_data = [
  { code: "HANPYO", lecture_name: "디자인커뮤니케이션", class: "01", professor: "윤정식", grade: "03", personnel: "25", department: "디자인건축공학부"},
  { code: "HANPYO", lecture_name: "디자인커뮤니케이션", class: "01", professor: "윤정식", grade: "03", personnel: "25", department: "디자인건축공학부"},
  { code: "HANPYO", lecture_name: "디자인커뮤니케이션", class: "01", professor: "윤정식", grade: "03", personnel: "25", department: "디자인건축공학부"},
  { code: "HANPYO", lecture_name: "디자인커뮤니케이션", class: "01", professor: "윤정식", grade: "03", personnel: "25", department: "디자인건축공학부"},
  { code: "HANPYO", lecture_name: "디자인커뮤니케이션", class: "01", professor: "윤정식", grade: "03", personnel: "25", department: "디자인건축공학부"},
  { code: "HANPYO", lecture_name: "디자인커뮤니케이션", class: "01", professor: "윤정식", grade: "03", personnel: "25", department: "디자인건축공학부"},
  { code: "HANPYO", lecture_name: "디자인커뮤니케이션", class: "01", professor: "윤정식", grade: "03", personnel: "25", department: "디자인건축공학부"},
  { code: "HANPYO", lecture_name: "디자인커뮤니케이션", class: "01", professor: "윤정식", grade: "03", personnel: "25", department: "디자인건축공학부"},
  { code: "HANPYO", lecture_name: "디자인커뮤니케이션", class: "01", professor: "윤정식", grade: "03", personnel: "25", department: "디자인건축공학부"},
  { code: "HANPYO", lecture_name: "디자인커뮤니케이션", class: "01", professor: "윤정식", grade: "03", personnel: "25", department: "디자인건축공학부"},
  { code: "HANPYO", lecture_name: "디자인커뮤니케이션", class: "01", professor: "윤정식", grade: "03", personnel: "25", department: "디자인건축공학부"},
  { code: "HANPYO", lecture_name: "디자인커뮤니케이션", class: "01", professor: "윤정식", grade: "03", personnel: "25", department: "디자인건축공학부"},
  { code: "HANPYO", lecture_name: "디자인커뮤니케이션", class: "01", professor: "윤정식", grade: "03", personnel: "25", department: "디자인건축공학부"},
  { code: "HANPYO", lecture_name: "디자인커뮤니케이션", class: "01", professor: "윤정식", grade: "03", personnel: "25", department: "디자인건축공학부"},
  { code: "HANPYO", lecture_name: "디자인커뮤니케이션", class: "01", professor: "윤정식", grade: "03", personnel: "25", department: "디자인건축공학부"},
  { code: "HANPYO", lecture_name: "디자인커뮤니케이션", class: "01", professor: "윤정식", grade: "03", personnel: "25", department: "디자인건축공학부"},
  { code: "HANPYO", lecture_name: "디자인커뮤니케이션", class: "01", professor: "윤정식", grade: "03", personnel: "25", department: "디자인건축공학부"},
  { code: "HANPYO", lecture_name: "디자인커뮤니케이션", class: "01", professor: "윤정식", grade: "03", personnel: "25", department: "디자인건축공학부"},
]

class timetable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      
    }
  }
  
  render() {
    const init_table_header = WEEK_NAME.map((week)=> 
        <td className='timetable_header'>{week}</td>
    )
    const init_table_body = TIME.map((time)=>
      <tr>
        <td className='timetable_body'>{time.time_name}</td>
        <td className='timetable_body'>{time.clock_name}</td>
        <td className='timetable_body'></td>
        <td className='timetable_body'></td>
        <td className='timetable_body'></td>
        <td className='timetable_body'></td>
        <td className='timetable_body'></td>
      </tr>
    )
    const load_lecture_data = test_data.map((data) =>
      <tr>
        <td width='60rem' className='find_lecture_header'>{data.code}</td>
        <td width='160rem' className='find_lecture_header'>{data.lecture_name}</td>
        <td width='40rem' className='find_lecture_header'>{data.class}</td>
        <td width='60rem' className='find_lecture_header'>{data.professor}</td>
        <td width='40rem' className='find_lecture_header'>{data.grade}</td>
        <td width='40rem' className='find_lecture_header'>{data.personnel}</td>
        <td width='160rem'>{data.department}</td>
      </tr>
    )
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
              <h3 className='timetable_tab'>시간표1　|　시간표2　|　시간표3　<img className = 'tab_icon' alt='#' src={require('../img/tab_plus.png')}></img></h3>
              <table className='timetable'>
                <td className='timetable_header timetable_time'></td>
                <td className='timetable_header timetable_time'></td>
                {init_table_header}
                {init_table_body}
                <tr>
                  <td className='timetable_time' colSpan='2' >이후</td>
                  <td className='timetable_body'></td>
                  <td className='timetable_body'></td>
                  <td className='timetable_body'></td>
                  <td className='timetable_body'></td>
                  <td className='timetable_body'></td>
                </tr>
              </table>
              
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
              />
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


              <div className='find_lecture_table_container'>
                <table className='find_lecture_header_table'>
                  <th>
                    <td width='60rem' className='find_lecture_header'>코드</td>
                    <td width='160rem' className='find_lecture_header'>강의명</td>
                    <td width='40rem' className='find_lecture_header'>분반</td>
                    <td width='60rem' className='find_lecture_header'>교수</td>
                    <td width='40rem' className='find_lecture_header'>대상</td>
                    <td width='40rem' className='find_lecture_header'>정원</td>
                    <td width='160rem'>개설학부</td>
                  </th>
                  
                </table>
                <table className='find_lecture_body_table'>
                  {load_lecture_data}
                </table>

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
                <table className='find_lecture_header_table'>
                  <th>
                    <td width='60rem' className='find_lecture_header'>코드</td>
                    <td width='160rem' className='find_lecture_header'>강의명</td>
                    <td width='40rem' className='find_lecture_header'>분반</td>
                    <td width='60rem' className='find_lecture_header'>교수</td>
                    <td width='40rem' className='find_lecture_header'>대상</td>
                    <td width='40rem' className='find_lecture_header'>정원</td>
                    <td width='160rem'>개설학부</td>
                  </th>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default timetable;
