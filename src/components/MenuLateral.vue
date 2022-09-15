<template>
  <div class="menu">
    <div class='inputDiv'>
      <input class='search' type="search" name="search" id="search" placeholder="Procure por cidade ou estado">
    </div>
    <div class="menuContent"></div>
  </div>
</template>

<script>
  
  import fillTable from '../js/MenuLateral.js'
  import swapiGet from '../js/MenuLateral.js'

  export default {
    name: 'LateralMenu',
    components: {
      fillTable,
      swapiGet
    },
    methods: {
      search() {
        let inputButton = document.querySelector("#search")
        inputButton.addEventListener('keyup', async function(e) {
          if (e.keyCode == 13) {
            await this.searchCity()
            return
          }
        })
      },
      async searchCity() {
        let inputButton = document.querySelector("#search")
        let inputValue = inputButton.value
        if (inputValue != '') {
          let citys = await swapiGet(inputValue)
          citys.forEach(city => fillTable(city))
          console.log(citys)
        }
      }
    },
    mounted() {
      this.search(),
      this.searchCity()
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