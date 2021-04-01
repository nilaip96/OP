import React from 'react';
import axios from 'axios';
import styled from 'styled-components';
import SearchBar from './components/SearchBar.jsx';
import SearchList from './components/SearchList.jsx';
import style from './style.jsx';
// import TeamList from './components/TeamList.jsx';

const Wrapper = styled.div`
width: 65vw;
margin: 30vh auto;
margin-bottom: 5vh;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`;

const OPButton = styled.button`
  font-family: ${style.font};  
  font-weight: 700;
  background-color: ${style.light};
  border: 1px solid ${style.dark};
  border-radius: 3vh;
  height: 3vh;
  width: 30vw;
  font-size: 15px;
  color: ${style.dark};
  &:hover {
    cursor: pointer;
    color: ${style.primary};
    border: 1px solid ${style.primary};
    box-shadow: 0 3px 6px ${style.shadow}, 0 3px 6px ${style.shadow};
  };
  &:focus {
    outline: none;
    box-shadow: none;
  };

`;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dd: [],
      teamList: [],
    };
    this.search = this.search.bind(this);
    this.addPlayer = this.addPlayer.bind(this);
    this.reset = this.reset.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    axios.post('/optimize', this.state.teamList).then((data) => {
      console.log(data);
    });
  }

  reset() {
    this.setState({ dd: [] });
  }

  addPlayer(obj) {
    this.state.teamList.push(obj);
    this.setState((prevState) => ({
      teamList: prevState.teamList,
    }));
  }

  search(string) {
    axios.get(`/search/${string}`)
      .then((data) => {
        this.setState({
          dd: data.data.rows,
        });
      });
  }

  render() {
    console.log(this.state.teamList);
    return (
      <Wrapper>
        {this.state.teamList.length > 2
          ? <OPButton onClick={this.handleClick}>Get A Fire Line Up</OPButton> : null}
        <SearchBar func={this.search} reset={this.reset} />
        {this.state.dd.length === 0
          ? null
          : <SearchList results={this.state.dd} func={this.addPlayer} />}
      </Wrapper>
    );
  }
}

export default App;
