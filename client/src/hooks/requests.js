const API_URL = 'http://localhost:8000'

async function httpGetPlanets() {
  try {
    const response = await fetch(`${API_URL}/planets`)
    return await response.json()
  }
  catch (err) {
    console.error(err)
  }
}
// Load launches, sort by flight number, and return as JSON.
async function httpGetLaunches() {

  try {
    const response = await fetch(`${API_URL}/launches`)
    const fetchedLaunches = await response.json()
    return fetchedLaunches.sort((a, b) => {
      return a.flightNumber - b.flightNumber;
    })
  }
  catch (err) {
    console.error(err)
  }
}
// Submit given launch data to launch system.
async function httpSubmitLaunch(launch) {
  try {
    return await fetch(`${API_URL}/launches`, {
      method: 'post',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(launch),
    })
  } catch (err) {
    return {
      ok: false,
    }
  }

}

// Delete launch with given ID.
async function httpAbortLaunch(id) {
  try {
    return await fetch(`${API_URL}/launches/${id}`, {
      method: "DELETE",
    })
  } catch (err) {
    return {
      ok: false,
    }
  }
}

export {
  httpGetPlanets,
  httpGetLaunches,
  httpSubmitLaunch,
  httpAbortLaunch,
};