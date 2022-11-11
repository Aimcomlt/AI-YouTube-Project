import { createStore } from 'redux';
import { Provider } from 'react-redux';
import {timer} from './Timer';
import reducers from './reducers';
import './App.css';

const store = createStore(reducers);

function App() {
  return (
    <Provider store={store}>
      <h1>TIMER</h1>
      
    </Provider>
  );
}

export default App;
