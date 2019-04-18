export const UPDATE_AMOUNT = 'drivers/UPDATE_AMOUNT'

export const updateAmountDrivers = num => ({
  type: UPDATE_AMOUNT,
  payload: { num }
})

const reducer = (state = 0, action = {}) => {
  const { num } = action.payload || {}

  switch(action.payload) {
    case UPDATE_AMOUNT:
      return num
    default:
      return state
  }
}

export default reducer
