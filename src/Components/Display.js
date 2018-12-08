import React from 'react';

export class Display extends React.Component {

  render() {
    return (
      <div className='display-container'>
        <p className='session-title'>{this.props.active.replace(/([A-Z])/, ' $1').replace(/^./, function(str){return str.toUpperCase()})}</p>
        <p className='countdown-timer'>{this.props.translateTime(this.props.timer)}</p>
      </div>
    )
  }
}