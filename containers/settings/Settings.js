import React, { Component } from 'react';
import { Breadcrumb, Select, Label } from '@traveloka/soya-components';

class Settings extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        theme: 'zetta'
    };
  }

  handleChange = e => {
    this.setState({ theme: e });
    localStorage.setItem('theme', e);
  }

  componentDidMount = () => {
    const theme = localStorage.getItem('theme');
    this.setState({ theme });
  }

  render() {
    const links = [
      {
        title: 'Soya',
        href: '/'
      },
      {
        title: 'Settings',
      }
  ];

  const options = [
      {
        label: 'Tera',
        value: 'tera'
      },
      {
        label: 'Zetta',
        value: 'zetta'
      }
  ];

  return (
      <div>
      <Breadcrumb theme={this.state.theme} links={links} />
      <Label theme={this.state.theme}>Theme</Label>
      <Select theme={this.state.theme} handleChange={this.handleChange} value={this.state.theme} options={options} />
      </div>
    );
  }
}

export default Settings;