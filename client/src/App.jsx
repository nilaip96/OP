import React from 'react';
import axios from 'axios';
import styled from 'styled-components';
import SearchBar from './components/SearchBar.jsx';
import SearchList from './components/SearchList.jsx';
import style from './style.jsx';
import TeamList from './components/TeamList.jsx';
import Modal from './components/Modal.jsx';
import Results from './components/Results.jsx';
import LandingPage from './components/LandingPage.jsx';

const AppWrapper = styled.div`
height: 100vh;
width: 100vw;
background: linear-gradient(90deg, #FF00FF 0%, #ff7f50 64%, #FFD700 100%);
`;

const Wrapper = styled.div`
width: 65vw;
margin: 0 auto;
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
  width: 60vw;
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

const ButtonWrap = styled.div`
  padding: 1vh 1vw 1vh 1vw;
`;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dd: [],
      teamList: [],
      modal: false,
      optimized: [],
    };
    this.search = this.search.bind(this);
    this.addPlayer = this.addPlayer.bind(this);
    this.reset = this.reset.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.removePlayer = this.removePlayer.bind(this);
    this.exitModal = this.exitModal.bind(this);
  }

  handleClick() {
    axios.post('/optimize', this.state.teamList).then((data) => {
      this.setState({
        modal: true,
        optimized: data.data,
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

  removePlayer(obj) {
    this.state.teamList.forEach((player, index) => {
      if (player.name === obj.name) {
        this.state.teamList.splice(index, 1);
      }
    });
    this.setState((prevState) => ({ teamList: prevState.teamList }));
  }

  search(string) {
    axios.get(`/search/${string}`)
      .then((data) => {
        this.setState({
          dd: data.data.rows,
        });
      });
  }

  exitModal() {
    this.setState({ modal: false });
  }

  render() {
    console.log(this.state.dd)
    return (
      <div>
        <LandingPage />
        <AppWrapper>
          <Wrapper>
            <SearchBar func={this.search} reset={this.reset} />
            {this.state.dd.length === 0
              ? null
              : <SearchList results={this.state.dd} func={this.addPlayer} />}
            {this.state.teamList.length === 0
              ? null
              : <TeamList list={this.state.teamList} func={this.removePlayer} />}
            <ButtonWrap>
              {this.state.teamList.length > 2
                ? <OPButton onClick={this.handleClick}>Get A Fire Line Up</OPButton> : null}
            </ButtonWrap>
            {this.state.modal
              ? (
                <Modal content={(
                  <Results
                    data={this.state.optimized}
                    func={this.exitModal}
                  />
              )}
                />
              )
              : null}
          </Wrapper>
        </AppWrapper>
      </div>
    );
  }
}

export default App;
