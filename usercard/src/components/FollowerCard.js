import React from 'react';
import styled from 'styled-components';

const StyledCard = styled.div`
  img {
    width: 80%;
  }
  h4 {
    color:white;
    text-shadow:1px 1px #333333;
  }
  
  background-color: #AAAAAA;
  border:2px solid black;
  color:black;
  width:15%;
  align-content: center;
  text-align: center;
  margin: 1%;
  cursor: pointer;

`

class FollowerCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: props.details.login,
      avatar: props.details.avatar_url,
      newUser: props.newUser
    }
  }

  handleClick = (evt) => {
    evt.preventDefault();
    this.state.newUser(this.state.name);
  }

  render() {
    return(
      <StyledCard onClick={this.handleClick}>
        {this.state.name ? <h4>{this.state.name}</h4> : null}
        {this.state.avatar ? <img src={this.state.avatar} alt={this.state.name} /> : null}
      </StyledCard>
    )
  }
}

export default FollowerCard