import { useState } from "react"
import { Section } from "./Section/Section";
import { FeedbackOptions } from "./FeedbackOptions/FeedbackOptions";
import { Statistics } from "./Statistics/Statistics";
import { Notification } from "./Notification/Notification";
import { GlobalStyle } from "./GlobalStyle";
import { Layout } from "./Layout";


export default function App () {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const options = {good, neutral, bad};

  const handleBtnClickFeedback = (evt) => {
    switch (evt.target.textContent) {
      case 'good':
        setGood(prevState => prevState + 1);
        break;
      
      case 'neutral':
        setNeutral(prevState => prevState + 1);
        break;
      
      case 'bad':
        setBad(prevState => prevState + 1);
        break;
      
      default:
        return;
    }
  };

  const countTotalFeedback = () => {
    let value = Object.values(options).reduce((acc, value) => {
      return acc + value;
    }, 0);
    return value;
  };

  const countPositiveFeedbackPercentage = () => {
    return Math.round((good / countTotalFeedback()) * 100);
  };


    return (
      <Layout>
        <GlobalStyle />
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={Object.keys(options)}
            onLeaveFeedback={handleBtnClickFeedback}
          />
        </Section>

        <Section title="Statistics">
          {countTotalFeedback() ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={countTotalFeedback()}
              positivePercentage={countPositiveFeedbackPercentage()}
            />
          ) : (
            <Notification message="There is no feedback" />
          )}
        </Section>
      </Layout>
    );
};
