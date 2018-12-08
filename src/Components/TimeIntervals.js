import React from 'react';

export class TimeIntervals extends React.Component {
  render() {
    return (
      <div className='time-interval-container'>
        <h1 className='title'>Pomodoro Timer</h1>
        <audio id='alarm' src='http://soundbible.com/grab.php?id=1133&type=mp3' />
        <div className='interval-buttons-container'>
          <button onClick={this.props.setPomodoro} className='interval-button all-button'>Pomodoro</button>
          <button onClick={this.props.setShortBreak} className='interval-button all-button'>Short Break</button>
          <button onClick={this.props.setLongBreak} className='interval-button all-button'>Long Break</button>
        </div>
      </div>
      )
  }
}