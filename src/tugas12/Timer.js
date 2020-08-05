import React, { Component } from 'react'

class Timer extends Component{
  constructor(props){
    super(props)
    this.state = {
      time: 100,
      date: new Date()
    }
  }

  componentDidMount(){
    if (this.props.start !== undefined){
      this.setState({time: this.props.start})
    }
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount(){
    clearInterval(this.timerID);
    
  }

  tick() {
    this.setState({
      time: this.state.time - 1 ,
      date: new Date()
    });
  }

  render(){
    return(
      <>
        {this.state.time >=0 &&
          <div style={{"text-align":"center"}}>
            <div div style={{display: "inline-block", width: "400px", "font-weight": "bold", "font-size": "16px"}}>sekarang jam: {this.state.date.toLocaleTimeString('en-US', { hour12: true })}</div>
            <div div style={{display: "inline-block", width: "350px", "font-weight": "bold", "font-size": "16px"}}> hitung mundur: {this.state.time}</div>
          </div>  
        }   
      </>
    )
  }
}

export default Timer;
