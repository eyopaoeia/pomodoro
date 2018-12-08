import React from 'react';

export class Settings extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleSettings = this.handleSettings.bind(this);
  }
  
  handleChange(event) {
    this.props.updateTimer(event.target.value, event.target.id)
  }

  handleClick() {
  	console.log('resetting')
  	this.props.reset();
  	this.handleSettings();
  }

  handleSettings() {
  	var settings = document.getElementById('settings');
  	if (settings.classList.contains('hide')) {
  		settings.classList.add('show');
  		settings.classList.remove('hide');
  	}
  	else if (settings.classList.contains('show')) {
  		settings.classList.remove('show');
  		settings.classList.add('hide');
  	}
  }
  
  render() {
    return (
      <div className='settings-container'>
        <button className='settings-button' onClick={this.handleSettings}></button>
        <div className='inputs-container hide' id='settings'>
          <label for='pomodoro'>Pomodoro Length</label>
          <input type='number' id='pomodoro-length' defaultValue='25' onChange={this.handleChange}/>
          <label for='short-break-length'>Short Break Length</label>
          <input type='number' id='short-break-length' defaultValue='5' onChange={this.handleChange} />
          <label for='long-break-length'>Long Break Length</label>
          <input type='number' id='long-break-length' defaultValue='10' onChange={this.handleChange} />
        
        <button onClick={this.handleClick}>Confirm</button>
        </div>
      </div>
    )
  }
}