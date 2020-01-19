import React, { Component } from 'react';
import '../App.css';
import {WEEK_NAME, TIME} from "../constants/timedata";
import {test_data} from "../constants/testdata";

class timetable extends Component {
  constructor() {
    super();
    this.state = {
      info: test_data,
      selected_lecture: {},
      basket_lecture: [],
    }
    this.days = [
      ["01A", "09:00",1,1,1,1,1],
      ["01B", "09:30",1,1,1,1,1],
      ["02A", "10:00",1,1,1,1,1],
      ["02B", "10:30",1,1,1,1,1],
      ["03A", "11:00",1,1,1,1,1],
      ["03B", "11:30",1,1,1,1,1],
      ["04A", "12:00",1,1,1,1,1],
      ["04B", "12:30",1,1,1,1,1],
      ["05A", "13:00",1,1,1,1,1],
      ["05B", "13:30",1,1,1,1,1],
      ["06A", "14:00",1,1,1,1,1],
      ["06B", "14:30",1,1,1,1,1],
      ["07A", "15:00",1,1,1,1,1],
      ["07B", "15:30",1,1,1,1,1],
      ["08A", "16:00",1,1,1,1,1],
      ["08B", "16:30",1,1,1,1,1],
      ["09A", "17:00",1,1,1,1,1],
      ["09B", "17:30",1,1,1,1,1],
    ]
  }

  handlingSelect(selected) {
    if (selected.code !== this.state.selected_lecture.code) {
      this.setState({ selected_lecture: selected });
    } else {
      this.setState({ selected_lecture: {} });
    }
  }

  handlingDoubleClick(selected) {
    const newbasket = [
      ...this.state.basket_lecture,
      selected,
    ]
    for(var i=0; i<this.state.basket_lecture.length; i++) {
      if(this.state.basket_lecture[i].code===selected.code){
        return ;
      }
    }
    this.setState({basket_lecture: newbasket})
  }

  handlingBasketDoubleClick(selected) {
    const newbasket = this.state.basket_lecture.filter(
      data => data.code !== selected.code
    );
    this.setState({basket_lecture: newbasket})
  }

  render() {
    const init_table_header = WEEK_NAME.map((week)=>
      <td className='timetable_header'>{week}</td>
    )

    const init_table_body = this.days.map((data)=>
      <tr>
        <td className='timetable_body'>{data[0]}</td>
        <td className='timetable_body'>{data[1]}</td>
        <td className={data[2]!==0? 'timetable_body': 'cell_display_none'} rowSpan={data[2]}></td>
        <td className={data[3]!==0? 'timetable_body': 'cell_display_none'} rowSpan={data[3]}></td>
        <td className={data[4]!==0? 'timetable_body': 'cell_display_none'} rowSpan={data[4]}></td>
        <td className={data[5]!==0? 'timetable_body': 'cell_display_none'} rowSpan={data[5]}></td>
        <td className={data[6]!==0? 'timetable_body': 'cell_display_none'} rowSpan={data[6]}></td>
      </tr>
    ) 

    const load_lecture_data = this.state.info.reduce(
      (result, value) => {
        for(var i=0; i<this.state.basket_lecture.length; i++) {
          if(value.code===this.state.basket_lecture[i].code) {
            return result;
          }
        }
        result.push(value);
        return result;
      }, []
    ).map((data) => 
        <tr key = {data.code}
          className={this.state.selected_lecture.code === data.code ? "find_lecture_tr lecture_selected" : "find_lecture_tr"}
          onClick={this.handlingSelect.bind(this, data)}
          onDoubleClick={this.handlingDoubleClick.bind(this, data)}
        >
          <td width='60rem' className='find_lectures'>{data.code}</td>
          <td width='160rem' className='find_lectures'>{data.lecture_name}</td>
          <td width='40rem' className='find_lectures'>{data.class}</td>
          <td width='60rem' className='find_lectures'>{data.professor}</td>
          <td width='40rem' className='find_lectures'>{data.grade}</td>
          <td width='40rem' className='find_lectures'>{data.personnel}</td>
          <td width='160rem'>{data.department}</td>
        </tr>
    )

    const load_basket_data = this.state.basket_lecture.map((data) =>
    <tr key = {data.code}
      className={this.state.selected_lecture.code === data.code ? "find_lecture_tr lecture_selected" : "find_lecture_tr"}
      onClick={this.handlingSelect.bind(this, data)}
      onDoubleClick={this.handlingBasketDoubleClick.bind(this, data)}
    >
        <td width='60rem' className='find_lectures'>{data.code}</td>
        <td width='160rem' className='find_lectures'>{data.lecture_name}</td>
        <td width='40rem' className='find_lectures'>{data.class}</td>
        <td width='60rem' className='find_lectures'>{data.professor}</td>
        <td width='40rem' className='find_lectures'>{data.grade}</td>
        <td width='40rem' className='find_lectures'>{data.personnel}</td>
        <td width='160rem'>{data.department}</td>
      </tr>
    )
    return (
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
                    <option>월요일</option>
                    <option>화요일</option>
                    <option>수요일</option>
                    <option>목요일</option>
                    <option>금요일</option>
                  </select>
                </div>
                <div className = 'find_lecture_container_table_cell'>
                  <select className='select_box'>
                    <option>학　점</option>
                    <option>0학점</option>
                    <option>1학점</option>
                    <option>2학점</option>
                    <option>3학점</option>
                    <option>4학점</option>
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
                <table className='find_lecture_table'>
                  <tr className='find_lecture_th'>
                    <td className='find_lectures'>코드</td>
                    <td className='find_lectures'>강의명</td>
                    <td className='find_lectures'>분반</td>
                    <td className='find_lectures'>교수</td>
                    <td className='find_lectures'>대상</td>
                    <td className='find_lectures'>정원</td>
                    <td >개설학부</td>
                  </tr>
                  {load_lecture_data}
                </table>
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
                <table className='find_lecture_table'>
                  <tr className='find_lecture_th'>
                    <td className='find_lectures'>코드</td>
                    <td className='find_lectures'>강의명</td>
                    <td className='find_lectures'>분반</td>
                    <td className='find_lectures'>교수</td>
                    <td className='find_lectures'>대상</td>
                    <td className='find_lectures'>정원</td>
                    <td >개설학부</td>
                  </tr>
                  {load_basket_data}
                </table>
              </div>
            </div>
          </div>
        </div>
    );
  }
}

export default timetable;
