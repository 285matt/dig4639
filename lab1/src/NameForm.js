import React, { Component } from 'react';

class NameForm extends React.Component {
      constructor(props) {
        super(props);
        this.state = {value: '', valid: false, submit: false};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }

      handleChange(event) { //just added

        var regex = /^[a-zA-Z]+$/;
          if (regex.test(this.state.value)) {
            this.setState({valid: true});
          } else {
            this.setState({valid: false});
          }
        this.setState({value: event.target.value});

      }

      handleSubmit(event) {
        this.setState({submit: true});
        /*function greeting(props) {
          return(
            <div>
              <h1>Hello, {this.state.value}</h1>
            </div>
          )
        }*/

        console.log(this.state.value);
        console.log(this.state.valid);

        event.preventDefault();
      }


      render() {
        const isValid = this.state.valid;
        const submit = this.state.submit;
        let message;
        let form;

        if (submit) { // gets rid of the form if entered is true
          form = '';
        } else {
          form = (
            <form onSubmit={this.handleSubmit}>
              <label>
                Name:
                <input type="text" value={this.state.value} onChange={this.handleChange} />
              </label>
              <input type="submit" value="Submit" />
            </form>
          );
        }

        if (submit) {
          form = '';
        }

        if (submit && isValid) {
          message = 'Congratulations. You are beautiful and valid, ';
        } else if (isValid && !submit) {
          message = 'Looking good, ';
        } else if (!isValid && submit) {
          message = 'I\'m sorry. You are invalid. Only letters please! No numbers. You entered:';
        } else {
          message = 'Only letters please! ';
        }

        return (
          <div>
              {form} {message} {this.state.value}
          </div>
        );
      }
    }

    export default NameForm;
