import React from 'react';
import styled from 'styled-components';

import style from '../style.jsx';

const Logo = styled.img`
  height: 5vh;
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
`;

const Minus = styled.div`
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
`;

const LogoWrap = styled.div`
  width: 25vw;
  display: flex;
  justify-content: flex-start;
`;

class TeamItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.func(this.props.stats);
  }

  render() {
    return (
      <Wrapper>
        <NameWrap>
          <Minus onClick={this.handleClick}>-</Minus>
          <div>{this.props.stats.name}</div>
        </NameWrap>
        <LogoWrap>
          <Logo src={this.props.stats.img} alt={this.props.stats.team} />
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

export default TeamItem;
