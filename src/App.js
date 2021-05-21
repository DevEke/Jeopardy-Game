import "./App.scss";
import { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import GameBoard from "./GameBoard";
import Question from "./Question";
import { questions } from "./questions";

class App extends Component {
  constructor() {
    super();

    this.state = {
      questions: questions
    };
  }

  render() {
    const { questions } = this.state;
    return (
      <div className="app__wrapper">
      <Router>
        <Route
          exact
          path="/"
          render={() => <GameBoard questions={questions} />}
        />
        <Route
          path="/:catergory"
          render={({ match }) => (
            <Question
              question={questions.find(
                (question) => question.catergory === match.params.catergory
              )}
            />
          )}
        />
      </Router>
      </div>
    );
  }
}

export default App;

