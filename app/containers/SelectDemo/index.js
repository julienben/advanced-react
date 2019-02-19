import React from 'react';
import Select from 'components/Select';
import Select2 from 'components/Select2';

const options = [
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
  'December',
].map(m => ({ name: m, value: m }));

class SelectDemo extends React.Component {
  state = { value: 'August' };

  onChange = e => {
    this.setState({ value: e.target.value });
  };

  render() {
    return (
      <div>
        <Select
          name="testSelect"
          labelText="Pick a month"
          value={this.state.value}
          options={options}
          onChange={this.onChange}
        />

        <div style={{ height: 100 }} />

        <Select2
          name="testSelect"
          labelText="Pick a month"
          value={this.state.value}
          options={options}
          onChange={this.onChange}
        />
      </div>
    );
  }
}

export default SelectDemo;
