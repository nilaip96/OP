import React from 'react';
import styled from 'styled-components';
import style from '../style.jsx';

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background: url(https://wallpaperaccess.com/full/1284965.jpg) no-repeat fixed center;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Title = styled.div`
  color: ${style.dark};
  font-family: ${style.font};
  font-size: 30vh;
  font-weight: 20;
  display: flex;
  flex-direction: row;
`;

const OP = styled.div`
  color: ${style.dark};
`;

const TO = styled.div`
color: ${style.primary};
`;

const BOT = styled.div`
color: ${style.shadow};
`;

class LandingPage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Wrapper>
        <Title>
          <OP>OP</OP>
          <TO>to</TO>
          <BOT>BOT</BOT>
        </Title>
      </Wrapper>
    );
  }
}

export default LandingPage;
