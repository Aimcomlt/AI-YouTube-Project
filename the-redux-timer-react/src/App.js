import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducers from './reducers';
import './App.css';
import './NewTimer.css';
import './TimerView.css';
import NewTimer from './components/NewTimer';
import ListTimers from './components/ListTimers';
import { update } from './action';
import { loadState, saveState } from './utils';
import throttle from 'lodash/throttle'


let lastUpdateTime = Date.now()
setInterval(() => {
  const now = Date.now()
  const deltaTime = now - lastUpdateTime
  lastUpdateTime = now
  store.dispatch(update(deltaTime))
}, 50)

const persistedState = loadState()
const store = createStore(reducers, persistedState)
store.subscribe(throttle(() => {
  saveState(store.getState())
}, 1000));

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
