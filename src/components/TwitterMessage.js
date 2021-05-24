import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super();

    this.state = {
      message: '',
      maxChars: props.maxChars
    };
  }

  handleChange = (event) =>{
    let charsRemaining = this.props.maxChars - event.target.value.length
    this.setState({
      message: event.target.value,
      maxChars: charsRemaining
    })
    console.log(this.state.message)
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input 
        type="text" 
        name="message" 
        id="message" 
        value={this.state.message}
        onChange={this.handleChange}
        />
        <h2>You have {this.state.maxChars} chars remaining!</h2>
      </div>
    );
  }
}

export default TwitterMessage;
