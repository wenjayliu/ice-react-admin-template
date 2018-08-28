import React, { Component } from 'react';
import intl from 'react-intl-universal';

export default class BasicTable extends Component {
  render() {
    return (
      <div className="basic-table">
        table{intl.get('TIP')}
      </div>
    )
  }
}
