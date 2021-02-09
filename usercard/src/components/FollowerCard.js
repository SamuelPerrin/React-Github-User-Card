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
  border:1px solid black;
  color:black;
  width:15%;
  align-content: center;
  text-align: center;
  margin: 1%;
`

class FollowerCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: props.details.login,
      avatar: props.details.avatar_url,
    }
  }

  render() {
    return(
      <StyledCard>
        {this.state.name ? <h4>{this.state.name}</h4> : null}
        {this.state.avatar ? <img src={this.state.avatar} alt={this.state.name} /> : null}
      </StyledCard>
    )
  }
}

export default FollowerCard