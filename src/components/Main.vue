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

  import main from '../js/Main.js'
  import contentInfo from '../js/contentInfo.js'

  export default {
    name: 'MainContent',
    components: [
      main,
      contentInfo
    ]
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
    line-height: 0;
    align-items: center;
    justify-content: space-evenly;
  }

  .titleContent {
    color: #E7E8EB;
    font-size: 54px;
    font-weight: 500;
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
  }
  
</style>