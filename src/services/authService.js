const BACKEND_URL = 'http://localhost:3000'

const signup = async (formData) => {
  try{
    //fetch to POST signup route
    const res = await fetch(`${BACKEND_URL}/users/
      signup`, {
        method: 'POST',
        header: { 'Content-Type': 'application/json'},
        body: JSON.stringify(formData)
      })

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