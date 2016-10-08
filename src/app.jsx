import './index.scss';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';

import React from 'react';
import Sensors from './sensors';

export default class App extends React.Component {
  render() {
    const webSocket = 'ws://localhost:8080/sensors';

    return (
      <Sensors webSocket={webSocket} />
    )
  }
}
