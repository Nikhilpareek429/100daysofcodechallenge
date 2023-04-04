async function harry() {
    let delhiWeather = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("27 Deg")
      }, 2000)
    })
  
    let bangaloreWeather = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("21 Deg")
      }, 5000)
    })
  
    // delhiWeather.then(alert)
    // bangaloreWeather.then(alert)
    console.log("Fetching Delhi Weather Please wait.......")
    let delhiW = await delhiWeather
    console.log("Delhi Weather is Fetched: " + delhiW)
  
    console.log("Fetching Bangalore Weather Please wait.......")
    let bangaloreW = await bangaloreWeather
    console.log("Bangalore Weather is Fetched: " + bangaloreW)
    return [delhiW, bangaloreW]
  }
  
  console.log("welcome to weather control room")
  let a = harry()
  a.then((value)=>{
    console.log(value)
  })
  