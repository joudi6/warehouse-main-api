const checkStatus = (response) => {
  if (response.status >= 200 && response.status < 300) {
    return response.json()
  } else {
    return response.status
  }
}

export default async function fetchApi(url, method = 'GET', payload) {
  const res = await fetch(url, {
    method,
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  })

  return checkStatus(res)
}
