<template>
  <div class="menu">
    <div class='inputDiv'>
      <input class='search' type="search" name="search" id="search" placeholder="Procure por cidade ou estado">
    </div>
    <div class="menuContent"></div>
  </div>
</template>

<script>

  export default {
    name: 'MenuLateral',
    methods: {
      swapiGet() {
        let key = 'ec767c56'
        return axios.get(`https://api.hgbrasil.com/weather?format=json-cors&key=${key}`)
      },
      async fillTable() {
        let response = await this.swapiGet("results/")
        let conversion = JSON.stringify(response.data.results)
        let tableData = JSON.parse(conversion)
        let today = new Date()
        let h = today.getHours()
        let m = today.getMinutes()
        let txt = tableData.time
        txt =  h + ":" + m
    
        $('.menuContent').append(
        `
            <img class='climate' src="src/img/${tableData.condition_slug}.png" alt='${tableData.condition_slug}'>
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
      },
    },
    mounted() {
      this.swapiGet(),
      this.fillTable()
    }
  }

</script>

<style>
  .menu {
    width: 450px;
    background-color: #1E213A;
    display: flex;			
    flex-direction: column;
  }

  .inputDiv {
    margin: 1rem;
  }

  .search {
    background-color: #6E707A;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    width: 230px;
    height: 40px;
    padding: 1rem;
    color: #E7E7EB;
  }

  .search::placeholder {
    color: #E7E7EB;
  }

  .menuContent {
    display: flex;
    flex-direction: column;
    align-items: center;
    line-height: 3;
    margin-top: 3rem;
  }

  .climate {
    width: 145px;
  }

  .dateTime {
    text-align: center;
  }

  .temp {
    font-weight: 500;
    font-size: 80px;
    color: #E7E8EB;
  }

  .temp span {
    opacity: .8;
    font-size: 40px;
  }

  .description, .time {
    color: #A09FB1;
    font-weight: 600;
    font-size: 30px;
  }

  .time {
    font-size: 16px;
    font-weight: 500;
  }

  .location {
    display: flex;
    justify-content: center;
    align-items: center;
    color: #A09FB1;
    font-size: 16px;
    font-weight: 500;
  }

  .imgMap {
    width: 18px;
  }
  
</style>