const BACKEND_URL = import.meta.env.VITE_EXPRESS_BACKEND_URL;

const signup = async (formData) => {
  try{
    //fetch to POST signup route
    const res = await fetch(`${BACKEND_URL}/users/signup`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json'},
        body: JSON.stringify(formData)
      })

      console.log('Response:', res)

      //covert response to json
      const json = await res.json()
      console.log(json)

      //check for errors from server
      if(json.err) {
        throw new Error(json.err)
      }
      //if no errors, we have data to return!
      return json
  }catch(err) {
    console.log(err)
    throw err
  }
}

export {
  signup,
}