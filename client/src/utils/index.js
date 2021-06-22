const checkStatus = (response) => {
  if (response.status >= 200 && response.status <= 304) {
    return response.json()
  } else {
    return response.status
  }
}

async function fetchData(url) {
  try {
    const products = await fetch(url).then((res) => checkStatus(res))
    return products
  } catch (e) {
    console.log(e.toString())
  }
}

export default fetchData
