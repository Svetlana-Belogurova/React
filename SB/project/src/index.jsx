import React from 'react'
import ReactDom from 'react-dom'


const app = document.querySelector('#app');

class MessageSender extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: []};
    
        this.handleClick = this.handleClick.bind(this);
    }
    
    handleClick(event) {
        this.state.value.push("Hello!");
        this.setState({value: this.state.value});       
    }
  
    render() {

      const items = this.state.value.map((title, i) => <li key = { i }><a>{ title }</a></li>);
      
      return (
          <div>
            <button onClick={this.handleClick}>
                CLick Me
            </button>
            { items}
          </div>
      );
    }
  }
  
  ReactDom.render(
    <MessageSender />,
    app
  );
