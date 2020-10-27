/* import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
 */

import React, { Component } from 'react';
import Subject from "./component/SJT";
import TDC from "./component/TDC";
import Content from "./component/CTT";
import TBL from "./component/TBL";
import './App.css';

//Component는 하나의 최상위 태그로 시작해야 함.

class App extends Component {
  //render전 constructor가 Component초기화 역할.
  constructor(props){
    super(props);
      //state값 초기화
    this.state={
      subject:{title:'WEB', sub:'World Wide Web'},
      links:[
        {id : 1, title:'TITLE1', desc:'DESC1'},
        {id : 2, title:'TITLE2', desc:'DESC2'},
        {id : 3, title:'TITLE3', desc:'DESC3'}
      ],
      table: {tr: 5, td : 3}
    }
  }
  //links 데이터를 class App 외부에서 변수 선언 후 TDC data 로 데이터 전달 > 현재와 차이점.
  //화면 크기 조정
  
  render(){
    return(
      <div className="App">
        <Subject
          title = {this.state.subject.title} 
          sub = {this.state.subject.title}>
          </Subject>
        <Subject title = "REACT" sub = "For UI"></Subject>
        <TDC data = {this.state.links}></TDC>
        <Content title = "HTML" desc = "HTML is HyperText Markup Language."></Content>
        <TBL data = {this.state.table}></TBL>
    </div>
    );
  }
}

//funtion type - class type에 상관없음
export default App;
