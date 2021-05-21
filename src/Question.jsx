import { Link } from "react-router-dom";
import { FaArrowLeft } from 'react-icons/fa'

function Question(props) {
  const { question } = props;

  function setDone() {
    question.done = true;
  }

  return (
    <div className="question__wrapper">
      <Link to="/" className="back__button">
        <button onClick={setDone}><FaArrowLeft size={32}/></button>
      </Link>
      <p className="question">{question.question}</p>
    </div>
  );
}

export default Question;
