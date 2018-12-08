import React from 'react';
import './App.css';
import { Display } from './Components/Display.js';
import { Controls } from './Components/Controls.js';
import { Settings } from './Components/Settings.js';
import { TimeIntervals } from './Components/TimeIntervals.js';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      timer: 0,
      pomodoro: 1500000,
      shortBreak: 300000,
      longBreak: 600000,
      active: 'pomodoro'
    }
    this.setPomodoro = this.setPomodoro.bind(this);
    this.setShortBreak = this.setShortBreak.bind(this);
    this.setLongBreak = this.setLongBreak.bind(this);
    this.countdownFunc = this.countdownFunc.bind(this);
    this.soundAlarm = this.soundAlarm.bind(this);
    this.stopCountdown = this.stopCountdown.bind(this);
    this.startCountdown = this.startCountdown.bind(this);
    this.reset = this.reset.bind(this);
    this.updateTimer = this.updateTimer.bind(this);
    this.translateTime = this.translateTime.bind(this);
  }

  componentDidMount() {
    this.setState({
      timer: this.state.pomodoro
    })
    
  }
  
  componentWillUnmount() {
    clearInterval(this.interval);
  }
  
  setPomodoro() {
    this.stopCountdown();
    this.setState({
      timer: this.state.pomodoro,
      active: 'pomodoro'
    })
    this.startCountdown();
  }
  
  setShortBreak() {
    this.stopCountdown();
    this.setState({
      timer: this.state.shortBreak,
      active: 'shortBreak'
    })
    this.startCountdown();
  }
  
  setLongBreak() {
    this.stopCountdown();
    this.setState({
      timer: this.state.longBreak,
      active: 'longBreak'
    })
    this.startCountdown();
    
  }
  
  
  countdownFunc() {
    var oldTime = this.state.timer
    this.setState({
      timer: oldTime - 1000
    })
    if (this.state.timer === 0) {
      this.stopCountdown();
      this.soundAlarm();
    }
  }
  
  soundAlarm() {
    document.getElementById('alarm').play()
  }
  
  stopCountdown() {
    clearInterval(this.interval);
  }
  
  reset() {
    this.stopCountdown();
    var active = this.state.active
    this.setState({
      timer: this.state[active]
    })
  }
  
  startCountdown() {
    this.interval = setInterval(this.countdownFunc, 1000);
  }
  
  translateTime(mills) {
    var mins = Math.floor(mills / 60000);
    var secs = ((mills % 60000) / 1000).toFixed(0);
    return mins + ":" + (secs < 10 ? '0' : '') + secs;
  }
  
  updateTimer(value, id) {
    var milliVal = value * 60 * 1000;
    switch (id) {
      case 'pomodoro-length':
        this.setState({
          pomodoro: milliVal,
        })
        
        break;
      case 'short-break-length':
        this.setState({
          shortBreak: milliVal
        })
        
        break;
      case 'long-break-length':
        this.setState({
          longBreak: milliVal
        })
        
        break;
      default:
        break;
    }
  }
  
  render() {
    return (
    <div className='app-container'> 
        <TimeIntervals setPomodoro={this.setPomodoro} setShortBreak={this.setShortBreak} setLongBreak={this.setLongBreak}/>
        <Display translateTime={this.translateTime} timer={this.state.timer} active={this.state.active}/>
        <Controls stopCountdown={this.stopCountdown} startCountdown={this.startCountdown} reset={this.reset}/>
        <Settings updateTimer={this.updateTimer} reset={this.reset}/>
    </div>
    )
  }
}

export default App;
