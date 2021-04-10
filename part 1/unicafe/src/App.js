import React, { useState } from 'react';

const Statistic = ({text, stat}) => {
  return (
    <tr>
      <td>{text}:</td> 
      <td>{stat}</td>
    </tr>
  );
}

const Button = ({text, handleClick}) => {
  return (
    <button onClick={handleClick}>{text}</button>
  );
}

const Statistics = ({good, neutral, bad}) => {
  const totalFeedback = good + bad + neutral;
  const avgScore = (good - bad) / totalFeedback;
  const percentPositive = good * 100 / totalFeedback;
  
  if (totalFeedback > 0) {
    return (
      <div>
        <table>
          <tbody>
            <Statistic text="Good" stat={good} />
            <Statistic text="Neutral" stat={neutral} />
            <Statistic text="Bad" stat={bad} />
            <Statistic text="Total Feedback" stat={totalFeedback} />
            <Statistic text="Average Score" stat={avgScore} />
            <Statistic text="Percent Positive Feedback" stat={percentPositive + "%"} />
          </tbody>
        </table>
      </div>
    );
  } else {
    return (
      <div>
        <p>No Feedback Given.</p>
      </div>
    );
  }
}

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  

  return (
    <div>
      <h1>Give Feedback</h1>
      <Button text="Good" handleClick={() => setGood(good + 1)} />
      <Button text="Neutral" handleClick={() => setNeutral(neutral + 1)} />
      <Button text="Bad" handleClick={() => setBad(bad + 1)} />
      <h1>Statistics</h1>
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  );
}

export default App;
