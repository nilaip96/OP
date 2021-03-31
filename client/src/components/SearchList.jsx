import React from 'react';
import styled from 'styled-components';
import SearchItem from './SearchItem.jsx';
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
  max-height: 65vh;
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
  width: 25vw;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
`;

const TeamDiv = styled.div`
  padding: 0 3vh 0 0;
`;

const Add = styled.div`
  padding: 0 2vh 0 0;
`;

const SearchList = (props) => (
  <div>
    <Help>Now add them to your roster</Help>
    <StatsWrap>
      <NameWrap>
        <Add>
          Add
        </Add>
        <div>
          Name
        </div>
      </NameWrap>
      <RnPWrap>
        <div>
          Rank
        </div>
        <div>
          Position
        </div>
      </RnPWrap>
      <TeamWrap>
        <TeamDiv>
          Team
        </TeamDiv>
      </TeamWrap>
    </StatsWrap>
    <Wrapper>
      {props.results.map((item) => (
        <SearchItem
          stats={item}
          key={item.player}
          func={props.func}
        />
      ))}
    </Wrapper>
  </div>
);

export default SearchList;
