import { Component } from "react"
import { Section } from "./Section/Section";
import { FeedbackOptions } from "./FeedbackOptions/FeedbackOptions";
import { Statistics } from "./Statistics/Statistics";
import { Notification } from "./Notification/Notification";
import { GlobalStyle } from "./GlobalStyle";
import { Layout } from "./Layout";

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };


  handleBtnClickFeedback = (evt) => {
    this.setState((prevState) => {
      return { [evt.target.textContent]: prevState[evt.target.textContent] +1 };
  });
    // if (evt === 'good') {
    //   this.setState({ good: this.state.good + 1 });
    // } else if (evt === 'neutral') {
    //   this.setState({ neutral: this.state.neutral + 1 });
    // } else if (evt === 'bad') {
    //   this.setState({ bad: this.state.bad + 1 });
    // }
  };

  countTotalFeedback() {
    let value = Object.values(this.state).reduce((acc, value) => {
      return acc + value;
    }, 0);
    return value;
  }

  countPositiveFeedbackPercentage() {
    return Math.round((this.state.good / this.countTotalFeedback()) * 100);
  }


  render() {
    return (
      <Layout>
        <GlobalStyle />
        <Section title="Please leave feedback">
          <FeedbackOptions
            // options={['good', 'neutral', 'bad']}
            options={Object.keys(this.state)}
            onLeaveFeedback={this.handleBtnClickFeedback}
          />
        </Section>

        <Section title="Statistics">
          {this.countTotalFeedback() ? (
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          ) : (
            <Notification message="There is no feedback" />
          )}
        </Section>
      </Layout>
    );
  }
};
