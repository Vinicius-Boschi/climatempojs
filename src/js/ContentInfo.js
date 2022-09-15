function swapiGet() {
    let key = 'ec767c56'
    return axios.get(`https://api.hgbrasil.com/weather?format=json-cors&key=${key}`)
}

async function contentInfo() {
    let response = await swapiGet("results/")
    let conversion = JSON.stringify(response.data.results)
    let tableData = JSON.parse(conversion)
    
    $('.infos').append(
        `
            <div class="content-infos">
                <h3 class="title">Velocidade do vento</h3>
                <h1 class="titleContent">${tableData.wind_speedy}</h1>
            </div>
            <div class="content-infos">
                <h3 class="title">Humidade do ar</h3>
                <h1 class="titleContent">${tableData.humidity}%</h1>
            </div>
            <div class="content-infos">
                <h3 class="title">Nascer do sol</h3>
                <h1 class="titleContent">${tableData.sunrise}</h1>
            </div>
            <div class="content-infos">
                <h3 class="title">Pôr do sol</h3>
                <h1 class="titleContent">${tableData.sunset}</h1>
            </div>
        `
    )
}

contentInfo()

export default { contentInfo }