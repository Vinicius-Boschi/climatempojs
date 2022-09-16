<template>
  <main>
    <div class='container'></div>

    <div class="content">
      <h2>Informações de hoje</h2>
      <div class="infos"></div>
    </div>
    <footer class="footer">
        <p>Created by</p>
        <span>
          <a href="https://portfolioviniciusboschi.herokuapp.com/" target="_blank">Vinícius Boschi</a>
        </span>
        <p>devChallenges.io</p>
    </footer>
  </main>
</template>

<script>
  
  export default {
    name: 'MainContent',
    methods: {
      swapiGet() {
        let key = 'ec767c56'
        return axios.get(`https://api.hgbrasil.com/weather?format=json-cors&key=${key}`)
      },
      async mainTable() {
        let response = await this.swapiGet("results/")
        let conversion = JSON.stringify(response.data.results)
        let tableData = JSON.parse(conversion)
        let tableCast = tableData.forecast

        tableCast.map(function(item) {
            $('.container').append(
                `
                    <div class='nextClimates'>
                        <h3 class="title">${item.weekday}, ${item.date}</h3>
                        <img class='imgClimate' src="src/img/${item.condition}.png" alt='${item.condition}'>
                        <span class='temperature'>
                            <p class='maxTemp'>${item.max}°C</p>
                            <p class='minTemp'>${item.min}°C</p>
                        </span>
                    </div>
                `
            )
        })
      },
      async contentInfo() {
        let response = await this.swapiGet("results/")
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
                    <div class='percentagem'>
                        <p>0</p>
                        <p>50</p>
                        <p>100</p>
                    </div>
                    <div class='progress'>
                        <div class='progress-bar' style='width:${tableData.humidity}%'></div>
                    </div>
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
    },
    mounted() {
      this.swapiGet(),
      this.mainTable(),
      this.contentInfo()
    }
  }
</script>

<style>

  main {
    background-color: #100E1D;
    width: 100%;
  }

  .container {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    margin: 3rem;
    gap: 1rem;
  }

  .nextClimates {
    background-color: #1E213A;
    width: 150px;
    height: 180px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
  }

  .imgClimate {
    width: 56px;
  }

  .title, .maxTemp, .minTemp {
    font-size: 16px;
    color: #E7E7EB;
  }

  .minTemp {
    color: #A09FB1;
  }

  .temperature {
    display: flex;
    gap: 1rem;
  }

  .content {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .content h2 {
    color: #E7E7EB;
    font-weight: 700;
    font-size: 24px;
    margin-bottom: 2rem;
  }

  .infos {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
  }

  .content-infos {
    background-color: #1E213A;
    width: 330px;
    height: 200px;
    display: flex;
    flex-direction: column;
    line-height: 1.5;
    text-align: center;
    justify-content: center;
  }

  .titleContent {
    color: #E7E8EB;
    font-size: 54px;
    font-weight: 500;
  }

  .percentagem {
    display: flex;
    justify-content: space-evenly;
    color: #A09FB1;
  }

  .progress {
    background-color: #CCC;
    position: relative;
    width: 229px;
    height: 8px;
    border-radius: 80px;
    align-self: center;
  }

  .progress .progress-bar{
    position: absolute;
    height: 100%;
    background-color: #FFEC65;
    border-radius: 80px;
  }

  .footer {
    display: flex;
    justify-content: center;
    color: #E7E8EB;
    padding: 2rem;
  }

  footer a {
    text-decoration: none;
    color: inherit;
    font-weight: bold;
    cursor: pointer;
    margin-right: .5rem;
    margin-left: .5rem;
  }

  @media (min-width: 375px) and (max-width: 700px ) {
    .menu {
      width: 100%;
    }
  
    .container {
      grid-template-columns: repeat(2, 1fr);
    }
  
    .infos {
      grid-template-columns: repeat(1, 1fr);
    }
  
    .footer {
      padding: 1rem;
      height: 42px;
      align-items: center;
    }
  }

  @media (min-width: 701px) and (max-width: 1200px) {
    .menu {
      width: 100%;
    } 

    .container {
      grid-template-columns: repeat(2, 1fr);
    }
  }
  
</style>