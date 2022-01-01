import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './components/App'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from './reducers'
import middleware from './middleware'
import LoadingBar from 'react-redux-loading-bar'
import { BrowserRouter as Router } from 'react-router-dom'
const store = createStore(reducer, middleware);
class ProviderApp extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <LoadingBar />
        <Router>
          <App />
        </Router>
      </Provider>
    )
  }
}
ReactDOM.render(<ProviderApp />, document.getElementById('root'))
