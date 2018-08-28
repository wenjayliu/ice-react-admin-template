import React, { Component } from 'react';
import BasicTable from './BasicTable'
import intl from 'react-intl-universal';
// locale data
const locales = {
  "en-US": require('@src/locales/en-US.json'),
  "zh-CN": require('@src/locales/zh-CN.json')
}
export default class EveryDadyCount extends Component {
  state = { initDone: false }
  componentDidMount() {
    intl.init({
      currentLocale: 'zh-CN', // TODO: determine locale here
      locales,
    })
      .then(() => {
        // After loading CLDR locale data, start to render
        this.setState({ initDone: true });
      });
  }

  render() {
    return (
      <div className="every-dady-count-page">
        每日工作统计
        --{intl.get('TIP')}
        <BasicTable />
      </div>
    )
  }
}
