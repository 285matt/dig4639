import React, {
  Component
} from 'react';
class NameForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      value: event.target.value
    });
  }

  handleSubmit(event) {
    let Name = this.state.value;
    let alphabet = /^[A-Za-z]+$/;
    if (Name.match(alphabet)) {
      document.write("Hi User! Your Name is ",":" + " " + Name);
      return true;
    } else {
      alert('Non-Ascii Character Used. Bad User');
      return false;
    }
  }

  render() {
    return (
     <form onSubmit={ this.handleSubmit }>
       <label>
         Name:
         <input type="text" value={this.state.value} onChange={this.handleChange} />
       </label>
       <input type="submit" value="Submit" />
     </form>
   );
  }
}
export default NameForm;
