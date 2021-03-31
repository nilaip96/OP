import React, { Suspense } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import SearchBar from './components/SearchBar.jsx';
import SearchList from './components/SearchList.jsx';

const Body = styled.div`
  width: 65vw;
  margin: 30vh auto;
  margin-bottom: 5vh;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items:center;
  justify-content:center;
`;

const Title = styled.div`
  display: flex;
  justify-content: center;
  padding: 0vh 0;
  font-weight: 700;
  font-size: 72px;
  font-family: "Gill Sans", sans-serif;
  color: #d0d0d0;
`;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      dd: [],
      teamList: [],
    };
    //this.getAllPlayers = this.getAllPlayers.bind(this);
    this.search = this.search.bind(this);
    this.addPlayer = this.addPlayer.bind(this);
    this.reset = this.reset.bind(this);
  }

  // componentDidMount() {
  //   this.getAllPlayers();
  // }

  // getAllPlayers() {
  //   axios.get('/init')
  //     .then((data) => {
  //       this.setState({ dd: data.data.rows });
  //     });
  // }

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

  addPlayer() {

  }

  render() {
    return (
      <Body>
        <Wrapper>
          <Title>Hello</Title>
          <SearchBar func={this.search} reset={this.reset} />
          <SearchList results={this.state.dd} />
        </Wrapper>
      </Body>
    );
  }
}

export default App;
