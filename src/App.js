import axios from 'axios';
import { useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home'
import Quiz from './components/Quiz/Quiz'
import Result from './components/Result/Result'


function App() {
  const [name, setName] = useState("");
  const [questions, setQuestions] = useState();
  const [score, setScore] = useState(0);

  const fetchQuestions = async ({ category = "", difficulty = "" }) => {
//
    const { data } = await axios.get(`https://opentdb.com/api.php?amount=10${category && `&category=${category}`}${difficulty && `&difficulty=${difficulty}`}&type=multiple`
    );
setQuestions(data.results);
  }
  return (
    <BrowserRouter>
      <div className="app" style={{backgroundImage: 'url(./quiz10.jpg)'}}>
        <Header />
        <Switch>
          <Route path="/" exact >
            <Home name={name} setName={setName}
              fetchQuestions={fetchQuestions}
            />
          </Route>
          <Route path="/quiz" exact>
            <Quiz 
            name={name}
            questions={questions}
            score={score}
            setScore={setScore}
            setQuestions={setQuestions}
            />
          </Route>
          <Route path="/result" exact >
            <Result
             score={score}
             />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
