import React from 'react';
import axios from 'axios';
import styled from 'styled-components';
import SearchBar from './components/SearchBar.jsx';
import SearchList from './components/SearchList.jsx';
import style from './style.jsx';
import TeamList from './components/TeamList.jsx';

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
  }

  search(string) {
    axios.get(`/search/${string}`)
      .then((data) => {
        this.setState({
          dd: data.data.rows,
        });
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

  render() {
    console.log(this.state.teamList);
    return (
      <Wrapper>
        {this.state.teamList.length > 2 ? <OPButton /> : null}
        <SearchBar func={this.search} reset={this.reset} />
        {this.state.dd.length === 0
          ? null
          : <SearchList results={this.state.dd} func={this.addPlayer} />}
      </Wrapper>
    );
  }
}

export default App;
