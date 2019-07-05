// Utility class for client-side rendering where SSR falls over,
// e.g. for locale-formatted dates
// https://stackoverflow.com/questions/50883916/how-to-format-time-in-react-ssr-rendered-page-using-client-time-zone

import React, { Component } from 'react';

export default class ClientRender extends Component {
  state = { isMounted: false };

  componentDidMount () {
    this.setState({ isMounted: true });
  }

  render () {
    const { children } = this.props;
    const { isMounted } = this.state;

    return isMounted ? children : null;
  }
}
