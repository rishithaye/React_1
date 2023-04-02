
import { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
class App extends Component {
  state = {
    data: "",
  }
  changeHandler(event) {
    event.preventDefault();
    this.setState({
      data: event.target.value
    })
  }
  render() {
    return (

      <div className="container">
        <div className="input-group mb-3">
        <div className='one'>
          <input type="text" className="form-control ,center-block" placeholder="Type here..." aria-label="Username" aria-describedby="basic-addon1" onChange={(e) => this.
            changeHandler(e)}></input>
            </div>
        </div>

        <div style={{ textAlign: "center", justifyContent: "center", padding: "10px" }}>
          {this.state.data}
        </div>
      </div >
    );
  }
}

export default App;

