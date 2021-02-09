import React from 'react';
import './App.css';
import axios from 'axios';
import UserCard from './components/UserCard';
import Followers from './components/Followers';


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      query: '',
      userData: {},
      followersData: [],
    }
  }

  handleQuery = (evt) => {
    this.setState({query: evt.target.value});
  }

  handleSearch = (evt) => {
    evt.preventDefault();
    axios.get(`https://api.github.com/users/${this.state.query}`)
      .then(res => {
        console.log("received data in handleSearch", res.data);
        this.setState({userData: res.data})
      })
      .catch(err => console.log(err));
    }
    
  componentDidUpdate(prevProps, prevState){
    if (prevState.userData !== this.state.userData) {
      axios.get(`https://api.github.com/users/${this.state.query}/followers`)
      .then(res => {
        console.log("received data in cDU", res.data);
        this.setState({followersData: res.data})
        this.setState({query: ''});
      })
      .catch(err => console.log(err))
    }
  }

  render() {
    return (
      <div className="App">
        <header>
          <h1>GitCards</h1>
          <form onSubmit={this.handleSearch} style={{marginBottom: "1%"}}>
            <input 
              value={this.state.query}
              placeholder="Search for user..."
              onChange={this.handleQuery}
            />
          </form>
        </header>
        <UserCard userData={this.state.userData} className="App"/>
        {this.state.userData.name ? <h3>{this.state.userData.name}'s Followers</h3> : null}
        <Followers followersData={this.state.followersData} />
      </div>
    );
  }
}

export default App;
