<template>
  <div id="register" class="container">
    <div v-if="!registered">
      <h1>Alistar-se</h1>
      <p>Você quer destruir o Império? Nunca foi tão fácil. Preencha seus dados e se aliste agora mesmo.</p>
      <form @submit="registerRebel($event)">
        <div class="form-group">
          <label>Nome</label>
          <input type="text" v-model="rebelName">
        </div>
        <div class="form-group">
          <label>Planeta</label>
          <input type="text" v-model="planetName">
        </div>
        <div class="form-group">
          <label>Por que você quer se juntar à aliança rebelde?</label>
          <input type="text" v-model="reasonText">
        </div>
        <div class="form-group">
          <label>Data de nascimento</label>
          <input type="date" v-model="birthdayDate">
        </div>
        <input type="submit" value="Alistar!">
      </form>
    </div>
    <div v-if="registered" class="message">
      <h1>Alistamento realizado com sucesso!</h1>
      <p>Bem-vindo às forças armadas da Aliança Rebelde =)</p>
      <router-link to="/">Concluir</router-link>
    </div>
  </div>
</template>

<script>

  import Input from '../components/Input.vue'

  export default {
    name: 'Register',
    data() {
      return {
        rebelName: '',
        planetName: '',
        reasonText: '',
        birthdayDate: '',
        registered: false
      }
    },
    components: {
      Input
    },
    methods: {
      formatDate() {
        let date = this.birthdayDate
        let splitDate = date.split('-', 3).reverse()
        let joinDate = splitDate.join('/')
        this.birthdayDate = joinDate
      },
      registerRebel(e) {
        e.preventDefault()
        this.formatDate()
        let axios = require('axios')
        const rebel = {
          name: this.rebelName,
          planet: this.planetName,
          birthDate: this.birthdayDate,
          description: this.reasonText
        }
        axios.post('https://test-mais-a-educacao-v1.herokuapp.com/?token=viniciusDeOliveiraRodrigues', rebel).then((res) => {
          this.registered = true
        }).catch((error) => {
          console.log(error)
        })
      },
      
    }
  }

</script>

<style scoped>

  .message {
    background-color: var(--dark-sec);
    padding: 5rem;
    border-radius: 1rem;
  }

</style>