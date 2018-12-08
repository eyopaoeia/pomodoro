import React from 'react';

export class Controls extends React.Component {
  render() {
    return (
      <div className='controls-container'>
        <button onClick={this.props.startCountdown} className='control-button all-button'>Start</button>
        <button onClick={this.props.stopCountdown} className='control-button all-button'>Stop</button>
        <button onClick={this.props.reset} className='control-button all-button'>Reset</button>
      </div>
    )
  }
}