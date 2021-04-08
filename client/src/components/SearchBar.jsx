import React from 'react';
import styled from 'styled-components';
import style from '../style.jsx';

const Input = styled.input`
  margin: 10vh auto 1vh auto;
  border: 1px solid ${style.primary};
  background-color: ${style.light};
  color: ${style.dark};
  font-family: ${style.font};
  font-weight: 700;
  width: 60vw;
  border-radius: 3vh;
  z-index: 0;
  position: relative;
  padding: 1.5vh 2vw;
  &:focus {
    border: 1px solid ${style.dark};
    outline: none;
    box-shadow: 0 3px 6px ${style.shadow}, 0 3px 6px ${style.shadow};
  };
  &:hover {
    border: 1px solid ${style.dark};
    box-shadow: 0 3px 6px ${style.shadow}, 0 3px 6px ${style.shadow};
  }
`;

const Wrapper = styled.label`
  width: 100%;
`;

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({ input: e.target.value }, () => {
      if (this.state.input.length > 1) {
        this.props.func(this.state.input);
      } else {
        this.props.reset();
      }
    });
  }

  render() {
    return (
      <Wrapper>
        <Input value={this.state.input} onChange={this.handleChange} placeholder="SEARCH UP YOUR SQUAD" type="text" />
      </Wrapper>
    );
  }
}
export default SearchBar;
