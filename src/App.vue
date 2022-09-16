<template>
    <div class="contentApp">
        <LateralMenu />
        <MainContent />
    </div>
</template>

<script>
  import LateralMenu from './components/MenuLateral.vue'
  import MainContent from './components/Main.vue'

    export default {
        components: {
            LateralMenu,
            MainContent
        }
    }
</script>

<style>

    @import url('https://fonts.googleapis.com/css2?family=Raleway:wght@300;500;600&display=swap');

    .contentApp {
        display: flex;
        width: 100%;
        height: 100%;
    }

    #app {
        font-family: 'Raleway', serif;
    }

    @media (min-width: 375px) and (max-width: 700px ) {
        .contentApp {
            flex-direction: column;
        }
    }

    @media (min-width: 701px) and (max-width: 1200px) {
        .contentApp {
            flex-direction: column;
        }
    }
    
</style>