import React from 'react';
import FollowerCard from './FollowerCard';
import styled from 'styled-components';

const StyledFollowers = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-evenly;
  align-items: flex-start;
`

class Followers extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      followersData: props.followersData,
      newUser: props.newUser,
    }
  }

  componentDidUpdate(prevProps,prevState) {
    if (prevProps.followersData !== this.props.followersData) {
      this.setState({followersData: this.props.followersData})
    }
  }

  render() {
    return(
      <StyledFollowers>
        {this.state.followersData.map(follower => <FollowerCard key={follower.id} details={follower} newUser={this.state.newUser} />)}
      </StyledFollowers>
    )
  }
}

export default Followers