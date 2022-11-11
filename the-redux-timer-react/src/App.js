import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import timer from './Timer';
import reducers from './reducers';
import './App.css';
import './NewTimer.css';
import './TimerView.css';
import NewTimer from './components/NewTimer';
import ListTimers from './components/ListTimers';
import { update } from './action'

const store = createStore(reducers);

let lastUpdateTime = Date.now()
setInterval(() => {
  const now = Date.now()
  const deltaTime = now - lastUpdateTime
  lastUpdateTime = now
  store.dispatch(update(deltaTime))
}, 50)

function App() {
  return (
    <Provider store={store}>
      <h1>TIMER</h1>
      <NewTimer />
      <ListTimers />

    </Provider>
  );
}

export default App;
