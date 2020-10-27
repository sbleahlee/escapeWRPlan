import React, { Component } from 'react';


class Subject extends Component{
    render(){ //class 소속 function은 생략가능
      return (
        <header>
              <h1>{this.props.title}</h1>
              {this.props.sub}
          </header>
      );
    }
  }
  
export default Subject;