import React from 'react';

const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December'
];

export default class PrettyDate extends React.Component {
  componentWillMount() {
    this.interval = null;
  }

  componentDidMount() {
    let delta = (new Date() - this.props.value) / 100;
    if (delta < 60 * 60) {
      this.setInterval(this.forceUpdate.bind(this), 10000);
    }
  }

  componentWillUnmount() {
    if (this.interval) {
      clearInterval(this.interval);
    }
  }

  setInterval() {
    this.interval = setInterval.apply(null, arguments);
  }

  render() {
    let { value } = this.props;
    let text = months[value.getMonth()] + ' ' + value.getDate();
    let delta = (new Date() - value) / 1000;
    if (delta < 60) {
      text = 'Just now';
    } else if (delta < 60 * 60) {
      var mins = ~~(delta / 60);
      text = mins + (mins === 1 ? ' minute ago' : ' minutes ago');
    } else if (delta < 60 * 60 * 24) {
      var hours = ~~(delta / 60 / 60);
      text = hours + (hours === 1 ? ' hour ago' : ' hours ago');
    }

    return(
      <span>{text}</span>
    );
  }
}
