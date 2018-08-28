import React, { Component } from 'react';
import { REACT_APP_ENV } from './config'
import intl from 'react-intl-universal';

// locale data
const locales = {
  "en-US": require('./locales/en-US.json'),
  "zh-CN": require('./locales/zh-CN.json')
}
console.log('环境', REACT_APP_ENV)
console.log('语言', locales)

class App extends Component {
  state = {initDone: false}

  componentDidMount() {
    this.loadLocales();
  }

  loadLocales() {
    // init method will load CLDR locale data according to currentLocale
    // react-intl-universal is singleton, so you should init it only once in your app
    intl.init({
      currentLocale: 'zh-CN', // TODO: determine locale here
      locales,
    })
    .then(() => {
      // After loading CLDR locale data, start to render
	  this.setState({initDone: true});
    });
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
          {intl.get('TIP')}
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
