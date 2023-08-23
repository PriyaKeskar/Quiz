import React from 'react';
//import ReactDOM from 'react-dom/client';
import ReactDOM  from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { render } from '@testing-library/react';

/*const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();*/
class Quiz extends React.Component{
  constructor(props){
    super(props)
    var dataSet=[
      {
        question: "what is 8X1?",
        answers:[
          "1",
          "8",
          "16",
          "9"
        ],
       correct: 1
    },
    {
      question:"what is 3X4 ?",
      answers:[
        "1",
        "14",
        "5",
        "12"
      ],
      correct: 3
    },

    {
      question:"what is 9X1 ?",
      answers:[
        "1",
        "9",
        "5",
        "12"
      ],
      correct: 1
    },

  ];
  this.state={current:0, dataSet:dataSet, correct:0, incorrect:0}
  this.handleClick = this.handleClick.bind(this)
  }//end of constructor

  handleClick(choice){
    if(choice==this.state.dataSet[this.state.current].correct){
      this.setState({correct:this.state.correct+1})
    }
    else{
      this.setState({incorrect:this.state.incorrect+1})
    }

    if(this.state.current==2){
      this.setState({current:0})
      this.setState({incorrect:0})
      this.setState({correct:0})
    }
    else {
      this.setState({current:this.state.current+1})
    }
  }

  render(){
  return(
    <div>
      <ScroreArea correct={this.state.correct} incorrect={this.state.incorrect}></ScroreArea>
      <QuizArea handleClick={this.handleClick} dataSet={this.state.dataSet[this.state.current]}></QuizArea>
    </div>
  )
}

}

function Question(props){
  var style={
    color: "red",
  }
  return(
    <h1 style={style}>{props.dataSet.question}</h1>
  )
}

function Answer(props){
  var style={
    width:"100%",
    height:50,
    color:"blue"
  }
  return(
    <div>
      <button style={style} onClick={()=>props.handleClick(props.choice)}>{props.answer}</button>
    </div>
  )
}

function AnswerList(props){
  var answers=[]
  for(let i=0;i<props.dataSet.answers.length;i++){
    answers.push(<Answer choice={i} handleClick={props.handleClick} answer={props.dataSet.answers[i]}/>)
  }
  return(
    <div>
      {answers}
    </div>
  )
}

function QuizArea(props){
  var style={
    width:"25%",
    display:"block",
    textAlign:"center",
    boxSizing:"border-box",
    float:"left",
    padding:"0 2em"
  }
  return(
    <div style={style}>
    <Question dataSet={props.dataSet}></Question>
    <AnswerList dataSet={props.dataSet} handleClick={props.handleClick}></AnswerList>
    </div>
  )
}

function TotalIncorrect(props){
  var style={
    display:"inline-block",
    padding:"1em",
    background:"#eee",
    margin:"0 0 0 1em"

  }
  return(
    <h2 style={style}>Incorrect:{props.incorrect}</h2>
  )
 }

 function TotalCorrect(props){
  var style={
    display:"inline-block",
    padding:"1em",
    background:"#eee",
    margin:"0 0 0 1em"

  }
  return(
    <h2 style={style}>Correct:{props.correct}</h2>
  )
 }
function ScroreArea(props){
  var style={
    width:"100%",
    display:"block",
    textAlign:"left",
    float:"left",
    padding:"2em"
  }
  return(
    <div style={style}>
      <TotalCorrect correct={props.correct}></TotalCorrect>
      <TotalIncorrect incorrect={props.incorrect}></TotalIncorrect>
    </div>
  )
}

ReactDOM.render(
  <Quiz/>,
document.getElementById("root")  

)
