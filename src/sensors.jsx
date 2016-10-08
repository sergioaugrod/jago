import React from 'react';
import Sensor from './sensor';
import Websocket from 'react-websocket';

export default class Sensors extends React.Component {
  constructor(props) {
    super(props);

    this.state = { temperature: 0, humidity: 0, presence: 0, luminosity: 0 };
  }

  handleData(data) {
    let parsedData = JSON.parse(data);
    this.setSensors(parsedData);
  }

  setSensors(sensor) {
    let topic = sensor.topic.split("/")[1];
    let obj = {};

    obj[topic] = sensor.value;

    this.setState(obj);
  }

  render() {
    const { webSocket } = this.props;
    const { temperature, humidity, presence, luminosity } = this.state;

    return (
      <div className='row'>
        <h3>Dados dos Sensores</h3>

        <hr/>

        <Websocket url={webSocket} onMessage={this.handleData.bind(this)}/>

        <Sensor name='Temperatura' value={temperature} icon='sun-o' />
        <Sensor name='Umidade' value={humidity} icon='umbrella' />
        <Sensor name='Presença' value={presence} icon='eye' />
        <Sensor name='Luminosidade' value={luminosity} icon='lightbulb-o' />
      </div>
    )
  }
}
