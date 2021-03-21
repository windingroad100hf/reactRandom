import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import reactDom from 'react-dom';
import { render } from '@testing-library/react';

// const name = 'Harrison Fritz';
// const element = <h1> Hello, {name}</h1>
// ReactDOM.render(
//   element, document.getElementById('root')
// );

// function tick(){
//   const element = (
//     <div>
//       <h1>Hello World!</h1>
//       <h2>It is {new Date().toLocaleTimeString()}.</h2>
//     </div>
//   )
//   reactDom.render(element, document.getElementById('root'));
// }
// setInterval(tick,1000);

// function generateRandom(props){
//   // const dec = Math.random();
//   return <h1>Your random number is  {props.upperLimit}</h1>;
// }

// const element = <generateRandom upperLimit="hello" />;
// ReactDOM.render(
//   element, document.getElementById('root')
// );


// function Generate(props) {
//   for(let i = 0; i < 20; i++){
//     if (i == 5){
//       return <h1>{i} UpperLimit is  {props.upperLimit}</h1>;
//     }

    
//   }
// }

// const element = <Generate upperLimit={Math.floor(Math.random() * 100)} />;
// ReactDOM.render(
//   element,
//   document.getElementById('root')
// );

// function Clock(props){
//   return(
//     <div>
//       <h1>Hello, World!</h1>
//       <h2>It is {props.date.toLocaleTimeString()}.</h2>
//     </div>
//     );
// }

// function tick(){
//   ReactDOM.render(
//     <Clock />,
//     document.getElementById('root')
//   );
// }
// setInterval(tick, 1000);

// class Clock extends React.Component {
//   constructor(props){
//     super(props);
//     this.state = {date: new Date()};
//   }

//   componentDidMount(){
//     this.timerID=setInterval(
//       () => this.tick(),
//       1000
//     );

//   }
//   componentWillUnmount(){
//     clearInterval(this.timerID);

//   }

//   tick(){
//     this.setState({
//       date: new Date()
//     });
//   }
//   render(){
//     return (
//       <div>
//       <h1>Hello, World!</h1>
//       <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
//     </div>
//     );
//   }
// }

// ReactDOM.render(
//   <Clock />,
//   document.getElementById('root')
// );

class RandomNumber extends React.Component{
  constructor(props){
    super(props);
    this.state = {randomNumber: Math.floor(Math.random() * 10000)};
  }

  componentDidMount(){
    this.updateInterval=setInterval( ()=> this.update(), 1000);
  }    

  componentWillUnmount(){
    clearInterval(this.updateInterval);
  }
  update(){
    this.setState({
      randomNumber: Math.floor(Math.random() * 10000)
    })
  }
  render(){
    return (
      <div>
        <h1>{this.state.randomNumber}</h1>
      </div>
    );
  }

}

ReactDOM.render(
  <RandomNumber />,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
