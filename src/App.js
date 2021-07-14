import { React, ReactDOM, Component } from 'react';

class NameForm extends Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

function App() {
	
	return (
			<NameForm />
	);
	
	/*return (
		<Container maxWidth="sm">
			<FormControl>
				<InputLabel htmlFor="txt-correo">Correo</InputLabel>
				<Input id="txt-correo" name="txt-correo" type="email" aria-describedby="my-helper-text" />
			</FormControl>
		</Container>
	);*/
}

export default App;