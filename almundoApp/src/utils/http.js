async function httpClient (method, resource) {
  const baseURL = 'https://almundo-excercise.herokuapp.com/api/'
  // const baseURL = 'http://{your_ip}:3300/api/'

  const resultURL = baseURL + resource

  try {
    let result = await fetch(resultURL, {
      method,
      headers: {
        'Content-Type': 'application/json'
      }
    })
    return result.json()
  } catch (error) {
    console.error(error)
  }
}

export default httpClient
