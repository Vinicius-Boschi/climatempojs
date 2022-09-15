async function swapiGet() {
    let key = 'ec767c56'
    return axios.get(`https://api.hgbrasil.com/weather?format=json-cors&key=${key}`)
}

async function mainTable() {
    let response = await swapiGet("results/")
    let conversion = JSON.stringify(response.data.results)
    let tableData = JSON.parse(conversion)
    let tableCast = tableData.forecast

    tableCast.map(function(item) {
        $('.container').append(
            `
                <div class='nextClimates'>
                    <h3 class="title">${item.weekday}, ${item.date}</h3>
                    <img class='imgClimate' src="src/public/img/${item.condition}.png">
                    <span class='temperature'>
                        <p class='maxTemp'>${item.max}°C</p>
                        <p class='minTemp'>${item.min}°C</p>
                    </span>
                </div>
            `
        )
    })
}

mainTable()

export default { mainTable }