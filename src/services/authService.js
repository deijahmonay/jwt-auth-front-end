const BACKEND_URL = import.meta.env.VITE_EXPRESS_BACKEND_URL;

const signup = async (formData) => {
  try{
    //fetch to POST signup route
    const res = await fetch(`${BACKEND_URL}/users/signup`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json'},
        body: JSON.stringify(formData)
      })

      //covert response to json
      const json = await res.json()
      console.log(json)

      //check for errors from server
      if(json.err) {
        throw new Error(json.err)
      }
      if (json.token) {
        //localStorage.setItem('name-of-item', 'value-of-item')<-- saves to local storage
        localStorage.setItem('token', json.token)
      }
      return json
  }catch(err) {
    console.log(err)
    throw err
  }
}

const signin = async (user) => {
  try{
  //fetch to POST signin route
  const res = await fetch(`${BACKEND_URL}/users/signin`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json'},
      body: JSON.stringify(user)
    })

    //covert response to json
    const json = await res.json()
    console.log(json)

    //check for errors from server
    if(json.err) {
      throw new Error(json.err)
    }
    // if theres a token, split it and grab the payload only!
    if (json.token) {
      //localStorage.setItem('name-of-item', 'value-of-item')<-- saves to local storage
      localStorage.setItem('token', json.token)
      const user = JSON.parse(atob(json.token.split('.')[1]));
      console.log(user)
      return user
    }
    //if no errors, we have data to return!
    return json
  }catch(err) {
    console.log(err)
    throw err
  }
}

const getUser = () => {
  //localStorage.getItem('name-of-item)
  const token = localStorage.getItem('token')
  if(!token) return null
  const user = JSON.parse(atob(token.split('.')[1]))
  return user
}

const signout = () => {
  //localStorage.removeItem('name-of-item)
  localStorage.removeItem('token')
}

export {
  signup,
  signin,
  getUser,
  signout
}