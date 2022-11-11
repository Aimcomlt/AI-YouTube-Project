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

const store = createStore(reducers);

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
