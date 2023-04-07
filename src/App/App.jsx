import { useState } from 'react';
import './App.css';
import Buttons from '../Components/Buttons';
import Output from '../Components/Output';

const App = () => {
  const [input, setInput] = useState("");
  const [answer, setAnswer] = useState("");

  const handleInput = (e) => {
    let val = e.target.name;
    let str = input + val;
    if (str.length > 14) return;
    if (answer !== "") {
      setInput(answer + val);
      setAnswer("");
    } else setInput(str);
  };

  const clear = () => {
    setAnswer("");
    setInput("");
  }
  const backspace = () => {
    if (answer !== "") {
      setInput(answer.toString().slice(0, - 1));
      setAnswer("");
    } else setInput((prev) => prev.slice(0, -1));
  }
  const calc = () => {
    try {
      setAnswer(eval(input))
    } catch (error) {
      setAnswer("Error")
    }
  }

  return (
    <div className="container">
      <Output
        input={input}
        setInput={setInput}
        answer={answer}
      />
      <Buttons
        handleClick={handleInput}
        clear={clear}
        backspace={backspace}
        calc={calc}
      />
    </div>
  )
}

export default App;
