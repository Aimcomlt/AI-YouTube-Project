export const NEW_TIMER = 'NEW_TIMER'
export const addTimer = (name) => {
  return {
    type: NEW_TIMER,
    payload: { name }
  }
}