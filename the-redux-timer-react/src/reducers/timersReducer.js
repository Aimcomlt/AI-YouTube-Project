// Import all of our actions
import { NEW_TIMER, TOGGLE_TIMER, UPDATE } from '../action/index';
import {Timer} from '../Timer'

const timersReducer = (state = [], action) => {
  switch (action.type) {

    case UPDATE:
      return state.map((timer) => {
        if (timer.isRunning) {
          timer = { ...timer, time: timer.time += action.payload.deltaTime }
        }
        return timer
      })
    
    case NEW_TIMER:
      // Add a new timer, return a copy of state
      const name = action.payload.name ? action.payload.name : `Timer ${state.length}`
      return [...state, new Timer(name)]

    case TOGGLE_TIMER:
      // Invert the isRunning property of timer at index, return a copy of state
      const newState = state.map((timer, index) => {
        if (action.payload.index === index) {
          return {...timer, isRunning: !timer.isRunning}
        }
        return timer
      })
      return newState

    default:
      return state;
  }
}

export default timersReducer;