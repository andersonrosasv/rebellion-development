<template>
  <div class="bg">
    <aside id="sidebar">
    <Header/>
      <div class="container">
        <blockquote>
          <img src="../assets/icons/blockquote-start.svg" id="quote-start">
          <p>A força estará com você, sempre.</p>
          <div>
            <span>Obi-Wan Kenobi</span>
            <img src="../assets/icons/jedi-order.svg" :alt="jediIconAlt">
          </div>
          <img src="../assets/icons/blockquote-end.svg" id="quote-end">
        </blockquote>
      </div>
    </aside>
  </div>
</template>

<script>

  import Header from './Sidebar/Header.vue'

  export default {
    name: 'Sidebar',
    data() {
      return {
        jediIconAlt: 'Marca da ordem Jedi.'
      }
    },
    components: {
      Header
    }  
}

</script>

<style scoped>

.bg {
  background-image: url('../assets/images/obiwan-bg.jpg');
  background-position: center;
  background-size: cover;
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  height: 100vh;
}

#sidebar {
  background-color: rgba(42, 46, 52, .93);
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
}

blockquote p {
  font-size: 3rem;
  line-height: 4.5rem;
  margin-bottom: 4.5rem;
}

blockquote div {
  display: flex;
  align-items: center;
  gap: .6rem;
}

#quote-start {
  margin-bottom: 2rem;
}

#quote-end {
  margin-left: 75%;
}

@media(max-width: 925px) {
     
    .bg {
      position: relative;
    }

    .bg, #sidebar {
      height: 75vh;
     }

    .container {
      padding: 1rem;
     }

  }

</style>