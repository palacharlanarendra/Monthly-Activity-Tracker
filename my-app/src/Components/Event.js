import React from 'react';
class Event extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: [],
    };
  }
  handleSelect = ({ target }) => {
    const { selected } = this.state;
    const isSelected = selected.includes(target.innerText);

    if (isSelected) {
      const filtered = selected.filter((date) => date !== target.innerText);
      this.setState({
        selected: [...filtered],
      });
    } else {
      this.setState({
        selected: [...selected, target.innerText],
      });
    }
  };

  render() {
    return (
      <>
        <h3>{this.props.eventKey}</h3>
        <p>{this.props.month}</p>
        <div className='days'>
          {Array.from(new Array(this.props.totalDays)).map((cv, i) => (
            <p
              className={
                this.state.selected.includes(String(i + 1)) ? 'select' : ''
              }
              onClick={this.handleSelect}
            >
              {i + 1}
            </p>
          ))}
        </div>
      </>
    );
  }
}
export default Event;
