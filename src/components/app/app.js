import React, { Component } from "react";
import { Col, Row, Container } from "reactstrap";
import Header from "../header";
import RandomChar from "../randomChar";
import { CharacterPage, BooksPage, HousesPage, BooksItem } from "../pages";

import "./app.css";
import ErrorMessage from "../errorMessage";
import GotService from "../../services/gotServices";
import { BrowserRouter as Router, Route } from "react-router-dom";

export default class App extends Component {
  gotService = new GotService();
  state = {
    showRandomChar: true,
    error: false,
  };

  componentDidCatch() {
    console.log("error");
    this.setState({
      error: true,
    });
  }

  toggleRandomChar = () => {
    this.setState((state) => {
      return {
        showRandomChar: !state.showRandomChar,
      };
    });
  };

  render() {
    const char = this.state.showRandomChar ? <RandomChar  /> : null;
    if (this.state.error) {
      return <ErrorMessage />;
    }
    return (
      <Router>
        <div className="app">
          <Container>
            <Header />
          </Container>
          <Container>
            <Row>
              <Col lg={{ size: 5, offset: 0 }}>
                {char}
                <button className="toggle-btn" onClick={this.toggleRandomChar}>
                  Toggle random character
                </button>
              </Col>
            </Row>
            <Route path="/" exact component={() => <h1>Welcome</h1>}/>
            <Route path="/characters" component={CharacterPage} />
            <Route path="/houses" component={HousesPage} />
            <Route path="/books" exact component={BooksPage} />
            <Route path="/books/:id" render={
              ({match}) => {
              const {id} = match.params;
              return <BooksItem bookId={id}/>}
              } />
          </Container>
        </div>
      </Router>
    );
  }
}
// 19:01 