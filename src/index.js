import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'mobx-react'
import stores from '@src/stores'
import App from '@src/App'
import 'normalize.css/normalize.css'// CSS重置
import '@src/styles/index.scss' // 全局自定义 css

ReactDOM.render(<Provider {...stores}><App /></Provider>, document.getElementById('root'))
