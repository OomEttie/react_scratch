import * as React from 'react';

export class NameForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      namevalue: '', 
      textvalue: '',
      optionvalue: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({namevalue: event.target.value});
  }

  // arrow function does not need binding
  handleChangeText = (event) => {
    this.setState({textvalue: event.target.value});
  }

  handleChangeOption = (event) => {
    this.setState({optionvalue: event.target.value});
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.namevalue);
    alert('An essay was submitted: ' + this.state.textvalue);
    alert('Option selected: ' + this.state.optionvalue);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input type="text" value={this.state.namevalue} onChange={this.handleChange} />
        </label>
        <br/><br/>
        <label>
          TextArea:
          <textarea value={this.state.textvalue} onChange={this.handleChangeText} />
        </label>
        <br/>
        <label>
          Pick your favorite flavor:
          <select value={this.state.value} onChange={this.handleChangeOption}>
            <option value="grapefruit">Grapefruit</option>
            <option value="lime">Lime</option>
            <option value="coconut">Coconut</option>
            <option value="mango">Mango</option>
          </select>
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}