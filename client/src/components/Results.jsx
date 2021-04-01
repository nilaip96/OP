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
  font-family: ${style.font};
  box-shadow: 0 19px 38px #a0a0a0, 0 15px 12px #a0a0a0;
  z-index: 6000;
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
        this.state.Ult.push(player);
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
    console.log(this.state);
    return (
      <Container>Hello World</Container>
    );
  }
}

export default Results;
