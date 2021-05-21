import { Link } from "react-router-dom";

function Gameboard(props) {
  const { questions } = props;
  return (
    <div className="game__wrappper">
      <h1 className="title">jeopardy</h1>
      <div className="category__wrapper">
        <p>Fitness & Exercise</p>
        <p>James Bond Tunes</p>
        <p>Mad Men Brands</p>
        <p>Famous Movie Quotes<br/>(Name the Movie)</p>
        <p>Hollywood High Finance</p>
        <p>The Happenin<br/>(1970s Edition)</p>
      </div>
      <div className="game__grid">
        {questions.map((question) => {
          return (
            question.done === false ?
            <Link to={`/${question.catergory}`} className="question__item">
              <p>{question.value}</p>
            </Link> :
            <div className="question__item answered">
              <p>{question.value}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Gameboard;
