import React from 'react';
import styled from 'styled-components';

const Input = styled.input`
  border: 1px solid #424242;
  font-family: "Gill Sans", sans-serif;
  font-weight: 700;
  width: 60vw;
  z-index: 0;
  position: relative;
  padding: 1.5vh 2vw;
  &:focus {
    border: 1px solid #80CCC4;
    outline: none;
    box-shadow: 0 3px 6px #a0a0a0, 0 3px 6px #a0a0a0;
  };
  &:hover {
    box-shadow: 0 3px 6px #a0a0a0, 0 3px 6px #a0a0a0;
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
      if (this.state.input.length > 2) {
        this.props.func(this.state.input);
      } else {
        this.props.reset();
      }
    });
  }

  render() {
    return (
      <Wrapper>
        <Input value={this.state.input} onChange={this.handleChange} placeholder="BUILD YOUR SQUAD" type="text" />
      </Wrapper>
    );
  }
}
export default SearchBar;
