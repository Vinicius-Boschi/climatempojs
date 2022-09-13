<template>
  <main>
    <div class='container'>
        <div class="nextClimates">
            <h3 class="title">Sun, 7 Jun</h3>
            <img class='imgClimate' src="https://user-images.githubusercontent.com/74377158/189968716-b67438fd-999a-4152-ac0d-cdc0051aceee.png" alt="rain">
            <span class='temperature'>
                <p class='maxTemp'>16°C</p>
                <p class='minTemp'>11°C</p>
            </span>
        </div>

        <div class="nextClimates">
            <h3 class="title">Sun, 7 Jun</h3>
            <img class='imgClimate' src="https://user-images.githubusercontent.com/74377158/189968716-b67438fd-999a-4152-ac0d-cdc0051aceee.png" alt="rain">
            <span class='temperature'>
                <p class='maxTemp'>16°C</p>
                <p class='minTemp'>11°C</p>
            </span>
        </div>

        <div class="nextClimates">
            <h3 class="title">Sun, 7 Jun</h3>
            <img class='imgClimate' src="https://user-images.githubusercontent.com/74377158/189968716-b67438fd-999a-4152-ac0d-cdc0051aceee.png" alt="rain">
            <span class='temperature'>
                <p class='maxTemp'>16°C</p>
                <p class='minTemp'>11°C</p>
            </span>
        </div>

        <div class="nextClimates">
            <h3 class="title">Sun, 7 Jun</h3>
            <img class='imgClimate' src="https://user-images.githubusercontent.com/74377158/189968716-b67438fd-999a-4152-ac0d-cdc0051aceee.png" alt="rain">
            <span class='temperature'>
                <p class='maxTemp'>16°C</p>
                <p class='minTemp'>11°C</p>
            </span>
        </div>

        <div class="nextClimates">
            <h3 class="title">Sun, 7 Jun</h3>
            <img class='imgClimate' src="https://user-images.githubusercontent.com/74377158/189968716-b67438fd-999a-4152-ac0d-cdc0051aceee.png" alt="rain">
            <span class='temperature'>
                <p class='maxTemp'>16°C</p>
                <p class='minTemp'>11°C</p>
            </span>
        </div>
    </div>

    <div class="content">
      <h2>Today's Hightlights</h2>
      <div class="infos">
        <div class="content-infos">
          <h3 class="title">Wind status</h3>
          <h1 class="titleContent">7 mph</h1>
        </div>

        <div class="content-infos">
          <h3 class="title">Humidity</h3>
          <h1 class="titleContent">84%</h1>
        </div>

        <div class="content-infos">
          <h3 class="title">Visibility</h3>
          <h1 class="titleContent">6,4 miles</h1>
        </div>

        <div class="content-infos">
          <h3 class="title">Air Pressure</h3>
          <h1 class="titleContent">998 mb</h1>
        </div>
      </div>
    </div>
    <footer>
        <p>Created by</p>
        <span>
          <a href="https://portfolioviniciusboschi.herokuapp.com/">Vinícius Boschi</a>
        </span>
        <p>devChallenges.io</p>
    </footer>
  </main>

</template>

<script>
  export default {
    name: 'MainContent'
  }
</script>

<style scoped>

  main {
    background-color: #100E1D;
    width: 100%;
  }

  .container {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    margin: 3rem;
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
    line-height: 0;
    align-items: center;
    justify-content: space-evenly;
  }

  .titleContent {
    color: #E7E8EB;
    font-size: 54px;
    font-weight: 500;
  }

  footer {
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
  
</style>