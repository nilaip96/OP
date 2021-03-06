import React from 'react';
import styled from 'styled-components';
import TeamItem from './TeamItem.jsx';
import style from '../style.jsx';

const Help = styled.div`
  display: flex;
  justify-content: center;
  padding: 1.5vh 0;
  font-weight: 700;
  font-size: 2vh;
  font-family: ${style.font};
  color: ${style.light};
`;

const Wrapper = styled.div`
  width: 75vw;
  height: 30vh;
  max-height: 30vh;
  overflow-y: scroll;
`;

const StatsWrap = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;
color: ${style.light};
font-family: ${style.font};
font-size: 1.5vh;
padding: 1vh 1vh;
`;

const NameWrap = styled.div`
display: flex;
flex-direction: row;
align-items: center;
width: 25vw;
`;

const RnPWrap = styled.div`
  width: 25vw;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
`;

const TeamWrap = styled.div`
  display: flex;
  flex-direction: row;
  width: 25vw;
  justify-content: flex-start;
`;

const TeamDiv = styled.div`
  padding: 0 3vh 0 0;
`;

const Add = styled.div`
  padding: 0 2vh 0 0;
`;

const TeamList = (props) => (
  <div>
    <Help>Complete your roster</Help>
    <StatsWrap>
      <NameWrap>
        <Add>
          Remove
        </Add>
        <div>
          Name
        </div>
      </NameWrap>
      <TeamWrap>
        <TeamDiv>
          Team
        </TeamDiv>
      </TeamWrap>
      <RnPWrap>
        <div>
          Pos
        </div>
        <div>
          PTS
        </div>
        <div>
          REB
        </div>
        <div>
          AST
        </div>
      </RnPWrap>
    </StatsWrap>
    <Wrapper>
      {props.list.map((player) => (
        <TeamItem
          stats={player}
          key={player.name}
          func={props.func}
        />
      ))}

    </Wrapper>
  </div>

);

export default TeamList;
