const initialState = {
  userData: {},
}

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOGIN':
      console.log(action.data, 'state')
      return {
        ...state,
        userData: action.data,
      }
    case 'LOGOUT':
      const obj = { ...action }
      delete obj.type
      return { ...state, userData: {}, ...obj }
    default:
      return state
  }
}

export default authReducer
