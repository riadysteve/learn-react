import React from "react";
import "./App.css";
import styled from "styled-components";
import { Buttons, SearchBar } from "./styles/element";
import SearchIcon from "./svg/search.svg";

const Container = styled.div`
  width: 1280px;
  min-width: 1280px;
  margin: 0 auto;
  .row {
    width: 100%;
    display: flex;
    align-items: center;
  }

  .flex-column {
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
  }
`;

const Subhead = styled.h3`
  font-size: 24px;
  font-weight: 600;
  margin: 100px 0 48px;
`;

const App = () => {
  return (
    <div className="App">
      <Container>
        <Subhead>Buttons</Subhead>
        <div className="row">
          <Buttons>Playlist</Buttons>
          <Buttons outline>Playlist</Buttons>
          <Buttons primary>Playlist</Buttons>
          <Buttons secondary>Playlist</Buttons>
        </div>
        <Subhead>Search Bar</Subhead>
        <div className="row flex-column">
          <SearchBar>
            <img src={SearchIcon} alt="search-icon" />
            <input
              placeholder="Search for podcasts, news, stories, etc."
              type="text"
            />
          </SearchBar>
          <SearchBar squared>
            <img src={SearchIcon} alt="search-icon" />
            <input
              placeholder="Search for podcasts, news, stories, etc."
              type="text"
            />
          </SearchBar>
        </div>
      </Container>
    </div>
  );
};

export default App;
