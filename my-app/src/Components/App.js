import React from 'react';
import Event from './Event';
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      eventList: [],
      eventName: '',
    };
  }

  handleChange = ({ target }) => {
    let { name, value } = target;

    this.setState({
      [name]: value,
    });
  };
  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({
      eventList: [
        ...this.state.eventList,
        {
          eventKey: this.state.eventName,
          currentMonth: new Date().getMonth() + 1,
          TotalDays: new Date(
            new Date().getFullYear(),
            new Date().getMonth() + 1,
            0
          ).getDate(),
        },
      ],
    });
  };

  render() {
    let month = [];
    month[1] = 'January';
    month[2] = 'February';
    month[3] = 'March';
    month[4] = 'April';
    month[5] = 'May';
    month[6] = 'June';
    month[7] = 'July';
    month[8] = 'August';
    month[9] = 'September';
    month[10] = 'October';
    month[11] = 'November';
    month[12] = 'December';

    return (
      <>
        <section>
          <form onSubmit={this.handleSubmit}>
            <input
              value={this.state.eventName}
              onChange={this.handleChange}
              name='eventName'
            />
          </form>
        </section>
        <section>
          {this.state.eventList.map((data) => (
            <>
              <Event
                eventKey={data.eventKey}
                month={month[data.currentMonth]}
                totalDays={data.TotalDays}
              />
            </>
          ))}
        </section>
      </>
    );
  }
}
export default App;
