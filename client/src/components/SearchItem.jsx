import React from 'react';
import styled from 'styled-components';

import style from '../style.jsx';
import teamId from '../teamId.jsx';

const Logo = styled.img`
  height: 5vh;
  // width: 5vh;
`;

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  color: ${style.light};
  font-family: ${style.font};
  font-size: 1.5vh;
  padding: 1vh 0 1vh 0;
`;

const NameWrap = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 25vw;
  // background-color: blue;
`;

const Plus = styled.div`
  font-size: 3vh;
  padding: 0 2vh 0 0;
  &:hover {
    cursor: pointer;
    color: ${style.shadow};
  }
`;

const RnP = styled.div`
  width: 25vw;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  // background-color: red;
`;

const LogoWrap = styled.div`
  width: 25vw;
  display: flex;
  justify-content: flex-start;
  // background-color: green;
`;

class SearchItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      img: null,
      team: null,
      name: null,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    teamId.forEach((team) => {
      if (team.shortName === this.props.stats.tm) {
        this.setState({
          img: team.logo,
          team: team.fullName,
          name: this.props.stats.player.slice(0, this.props.stats.player.indexOf('\\')),
        });
      }
    });
  }

  handleClick() {
    const obj = Object.assign(this.state, this.props.stats);
    this.props.func(obj);
  }

  render() {
    return (
      <Wrapper>
        <NameWrap>
          <Plus onClick={this.handleClick}>+</Plus>
          <div>{this.state.name}</div>
        </NameWrap>
        <LogoWrap>
          {this.state.img ? <Logo src={this.state.img} alt={this.state.team} /> : null}
        </LogoWrap>
        <RnP>
          <div>
            {this.props.stats.pos}
          </div>
          <div>
            {this.props.stats.pts}
          </div>
          <div>
            {this.props.stats.trb}
          </div>
          <div>
            {this.props.stats.ast}
          </div>
        </RnP>
      </Wrapper>
    );
  }
}

export default SearchItem;
