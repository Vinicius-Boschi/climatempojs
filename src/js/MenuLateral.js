async function swapiGet() {
    let key = 'ec767c56'
    return axios.get(`https://api.hgbrasil.com/weather?format=json-cors&key=${key}`)
}

async function fillTable(city) {
    let response = await swapiGet("results/")
    let conversion = JSON.stringify(response.data.results)
    let tableData = JSON.parse(conversion)
    let today = new Date()
    let h = today.getHours()
    let m = today.getMinutes()
    let txt = tableData.time
    txt =  h + ":" + m
    
    $('.menuContent').append(
    `
        <img class='climate' src="src/public/img/${tableData.condition_slug}.png">
        <h1 class='temp'>${tableData.temp}<span>°C</span></h1>
        <h3 class='description'>${tableData.description}</h3>
        <div class="dateTime">
        <p class='time' id='hour'>${txt}</p>
        <p class='time'>${tableData.date}</p>
        <span class='location'>
            <img class='imgMap' src="https://user-images.githubusercontent.com/74377158/189970549-2aacec60-78c9-4044-bc33-8a740ad2b653.png" alt="icon maps">
            <p>${tableData.city}</p>
        </span>
        </div>
    `
    )
}

fillTable()

export default { fillTable , swapiGet}