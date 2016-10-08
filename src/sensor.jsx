import React from 'react';

export default class Sensor extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { name, value, icon } = this.props;

    const iconClass = 'sensors fa fa-5x fa-' + icon;

    return (
      <div className='col-md-3 text-center'>
        <div className='thumbnail'>
          <span className={iconClass}></span>
          <div className='caption'>
            <h3>{name}</h3>
            <div className='lead'>{value}</div>
          </div>
        </div>
      </div>
    )
  }
}
