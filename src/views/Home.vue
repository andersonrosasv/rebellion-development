<template>
  <div id="home" class="container">
    <div>
      <h1>Junte-se a nós!</h1>
      <p>Olá, jovem rebelde! Agora unir-se à aliança para restaurar a República está ainda mais fácil. Venha já fazer parte da nossa célula anti-imperialista e lutar pela Ordem Jedi.</p>
      <router-link to="/register">
        <Button :title="title" :description="description"/>
      </router-link>
      <router-link to="/rebels">
        <div class="link-image">
          <img src="../assets/icons/yoda.svg">
          <a href="#">Acesso do mestre Jedi</a>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>

  import Button from '../components/Button.vue'

  export default {
    name: 'Home',
    data() {
      return {
        title: 'Aliste-se!',
        description: 'Preencha o seu cadastro para ingressar na aliança.'
      }
    },
    components: {
      Button
    }
  }

</script>

<style scoped>

  .link-image {
    display: flex;
    align-items: center;
    margin-top: 2rem;
    gap: .6rem;
  }

</style>
