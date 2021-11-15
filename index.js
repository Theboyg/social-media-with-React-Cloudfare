addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request))
})
/**
 * Respond with hello worker text
 * @param {Request} request
 */
async function handleRequest(request) {

  const CLIENT_ID =""

  const resp = await fetch("", {

    headers: {
      
      Authorization: `CLIENT_ID ${CLIENT_ID}`
    }
  })

  const data = resp.json();
  return new Response(JSON.stringify(data), {
    
    'content-type': 'application/json'
  })
  

  const body = await request.json()
  return new Response(JSON.stringify(body))
}

async function getData() {
  
  const cacheKey = `data`

}

