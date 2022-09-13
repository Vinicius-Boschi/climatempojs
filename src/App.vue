<template>
    <div class="contentApp">
        <LateralMenu />
        <MainContent />
    </div>

    <Footer />
</template>

<script>
  import LateralMenu from './components/MenuLateral.vue'
  import MainContent from './components/Main.vue'
  import Footer from './components/Footer.vue'

    export default {
        components: {
            LateralMenu,
            MainContent,
            Footer
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
    
</style>