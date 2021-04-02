import React from 'react';
import styled from 'styled-components';
import style from '../style.jsx';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 3vh;
  justify-content: space-around;
  align-items: center;
  background: linear-gradient(90deg, #0000FF 0%, #1E90FF 64%, #7FFF00 100%);
  width: 70vw;
  height: 80vh;
  max-height: 90vh;
  color: ${style.light};
  font-family: ${style.font};
  font-size: 2vh;
  box-shadow: 0 19px 38px #a0a0a0, 0 15px 12px #a0a0a0;
  z-index: 6000;
`;

const ExitButton = styled.button`
  font-family: ${style.font};  
  font-weight: 700;
  background-color: ${style.light};
  border: 1px solid #0000FF;
  border-radius: 3vh;
  height: 3vh;
  width: 30vw;
  font-size: 2vh;
  color: #0000FF;
  &:hover {
    cursor: pointer;
    color: #7FFF00;
    border: 1px solid #7FFF00;
    box-shadow: 0 3px 6px #1E90FF, 0 3px 6px #1E90FF;
  };
  &:focus {
    outline: none;
    box-shadow: none;
  };
`;

const PlayerWrapper = styled.div`
  height: 55vh;
  max-height: 55vh;
  overflow-y: scroll;
  font-size: 2vh;
`;

const BestWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  font-size: 1.5vh;
`;

const Player = styled.div`
  padding: 2vh 0 0 0;
`;

const BestStat = styled.div`
  padding: 0 1vw 0 1vw;
`;

const Title = styled.div`
  font-size: 3vh;
`;

class Results extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      PG: null,
      SG: null,
      PF: null,
      SF: null,
      C: null,
      Ult: [],
    };
  }

  componentDidMount() {
    this.props.data.forEach((player) => {
      if (!this.state[player.pos]) {
        this.state[player.pos] = player;
      } else {
        this.state.Ult.unshift(player);
      }
    });
    this.setState((prevState) => ({
      PG: prevState.PG,
      SG: prevState.SG,
      PF: prevState.PF,
      SF: prevState.SF,
      C: prevState.C,
      Ult: prevState.Ult,
    }));
  }

  render() {
    return (
      <Container>
        <Title>Roster</Title>
        <PlayerWrapper>
          {this.state.PG
            ? (
              <div>
                <Player>{`PG : ${this.state.PG.name}`}</Player>
                <BestWrapper>
                  {this.state.PG.best.length !== 0 ? <div>Best in:</div> : null}
                  {this.state.PG.best.map((stat) => (<BestStat key={stat}>{stat}</BestStat>))}
                </BestWrapper>
              </div>
            ) : null}
          {this.state.SG
            ? (
              <div>
                <Player>{`SG : ${this.state.SG.name}`}</Player>
                <BestWrapper>
                  {this.state.SG.best.length !== 0 ? <div>Best in:</div> : null}
                  {this.state.SG.best.map((stat) => (<BestStat key={stat}>{stat}</BestStat>))}
                </BestWrapper>
              </div>
            ) : null}
          {this.state.PF
            ? (
              <div>
                <Player>{`PF : ${this.state.PF.name}`}</Player>
                <BestWrapper>
                  {this.state.PF.best.length !== 0 ? <div>Best in:</div> : null}
                  {this.state.PF.best.map((stat) => (<BestStat key={stat}>{stat}</BestStat>))}
                </BestWrapper>
              </div>
            ) : null}
          {this.state.SF
            ? (
              <div>
                <Player>{`SF : ${this.state.SF.name}`}</Player>
                <BestWrapper>
                  {this.state.SF.best.length !== 0 ? <div>Best in:</div> : null}
                  {this.state.SF.best.map((stat) => (<BestStat key={stat}>{stat}</BestStat>))}
                </BestWrapper>
              </div>
            ) : null}
          {this.state.C
            ? (
              <div>
                <Player>{`C : ${this.state.C.name}`}</Player>
                <BestWrapper>
                  {this.state.C.best.length !== 0 ? <div>Best in:</div> : null}
                  {this.state.C.best.map((stat) => (<BestStat key={stat}>{stat}</BestStat>))}
                </BestWrapper>
              </div>
            ) : null}
          {this.state.Ult.map((player) => (
            <div key={`${player.name}div`}>
              <Player key={`${player.name}Player`}>{`ULT : ${player.name}`}</Player>
              <BestWrapper key={`${player.name}Best`}>
                {player.best.length !== 0 ? <div>Best in:</div> : null}
                {player.best.map((stat) => (<BestStat key={stat}>{stat}</BestStat>))}
              </BestWrapper>
            </div>
          ))}
        </PlayerWrapper>
        <ExitButton onClick={this.props.func}>Exit</ExitButton>
      </Container>
    );
  }
}

export default Results;
