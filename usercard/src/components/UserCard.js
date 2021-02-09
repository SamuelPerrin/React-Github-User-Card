import React from 'react';
import styled from 'styled-components';

class UserCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: props.userData.name,
      username: props.userData.login,
      followers: props.userData.followers,
      following: props.userData.following,
      location: props.userData.location,
      bio: props.userData.bio,
      url: props.userData.html_url,
      avatar: props.userData.avatar_url,
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.userData.name !== this.props.userData.name) {
      this.setState({
        name: this.props.userData.name,
        username: this.props.userData.login,
        followers: this.props.userData.followers,
        following: this.props.userData.following,
        location: this.props.userData.location,
        bio: this.props.userData.bio,
        url: this.props.userData.html_url,
        avatar: this.props.userData.avatar_url})
    }
  }

  render() {
    return(
      <StyledCard>
        {this.state.name ? <h2>{this.state.name}</h2> : null}
        {this.state.avatar ? <img src={this.state.avatar} alt={this.state.name} /> : null}
        <div>
          {this.state.username ? <p><span>Username: </span>{this.state.username}</p> : null}
          {this.state.bio ? <p><span>Bio: </span>{this.state.bio}</p> : null}
          {this.state.location ? <p><span>Location: </span>{this.state.location}</p> : null}
          {this.state.url ? <p><span>GitHub: </span><a href={this.state.url}>{this.state.url}</a></p> : null}
          {this.state.followers ? <p><span>Followers: </span> {this.state.followers}</p> : null}
          {this.state.following ? <p><span>Following: </span> {this.state.following}</p> : null}
        </div>
      </StyledCard>
    )
  }
}

const StyledCard = styled.div`
  width:50%;
  background-color:#AAAAAA;
  display:flex;
  flex-flow: column nowrap;
  justify-content: space-evenly;
  align-items: center;
  margin-bottom: 3%;
  margin-left: 25%;
  border: 4px solid black;

  img {
    border-radius: 50%;
    border: 4px solid black;
    width: 50%;
  }

  h2 {
    color: white;
    text-shadow: 2px 2px #333333;
    font-weight: bold;
  }

  a {
    text-decoration: none;
  }

  span {
    font-weight: bold;
  }
`

export default UserCard;