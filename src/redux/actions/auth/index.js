// ** Handle User Login
export const handleLogin = (data) => {
  return (dispatch) => {
    dispatch({
      type: 'LOGIN',
      data,
    })
    localStorage.setItem('userData', JSON.stringify(data))
  }
}

// ** Handle User Logout
export const handleLogout = () => {
  return (dispatch) => {
    dispatch({
      type: 'LOGOUT',
    })
    localStorage.removeItem('userData')
  }
}
