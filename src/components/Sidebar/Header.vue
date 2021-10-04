<template>
    <router-link to="/">
      <header id="header">
        <img src="../../assets/icons/jedi-order.svg" :alt="alt">
        <h1>Rebellion.</h1>
      </header>
    </router-link>
</template>

<script>

export default {
  name: 'Header',
  data() {
    return {
      alt: 'Marca da ordem Jedi.'
    }
  }  
}

</script>

<style scoped>

#header {
  position: absolute;
  top: 0;
  margin: 2.5rem 5rem;
  display: flex;
  align-items: center;
  gap: .5rem;
}

#header img {
  width: 4rem;
}

#header h1 {
  font-weight: 700;
  font-size: 2rem;
}

</style>