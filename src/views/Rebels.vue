<template>
  <div id="rebels" class="container">
    <div v-if="!isEditing" id="form-filter">
      <h1>Filtros de busca</h1>
      <div class="form-filter-container">
        <form>
          <div class="form-group">
            <select @change="selectSearchType($event)">
              <option value="all">Todos</option>
              <option value="searchByName">Nome</option>
              <option value="searchByPlanet">Planeta</option>
              <option value="searchByDateDifference">Data</option>
            </select>
          </div>
        </form>
        <form class="form-filter-inputs" @submit="filterRebels($event)">
          <div class="form-group" v-if="searchByNameVisible">
            <input type="text" placeholder="Nome..." v-model="nameSearching" @focus="resetCards">
          </div>
          <div class="form-group" v-if="searchByPlanetVisible">
            <input type="text" placeholder="Planeta..." v-model="planetSearching" @focus="resetCards">
          </div>
          <div class="form-group" v-if="searchByDateVisible">
            <input type="date" placeholder="Inicial:" v-model="initialDateSearching" @focus="resetCards">
          </div>
          <div class="form-group" v-if="searchByDateVisible">
            <input type="date" placeholder="Final:" v-model="finalDateSearching" @focus="resetCards">
          </div>
          <div v-if="searchByNameVisible || searchByPlanetVisible || searchByDateVisible">
            <input type="submit" value="Buscar">
          </div>
        </form>
      </div>
    </div>
    <div v-if="!isEditing">
      <h1>Rebeldes alistados</h1>
      <div v-for="rebel in rebelsArray" :key="rebel.id" class="rebel">
        <header>
          <div class="handle-options">
            <img src="https://img.icons8.com/material-rounded/16/fed053/edit--v1.png" @click="getUpdateRebelData(rebel.id)"/>
            <img src="https://img.icons8.com/ios-glyphs/16/ff6b6b/delete-forever.png" @click="removeRebel(rebel.id)"> 
          </div>
          <div class="rebel-data">
            <h2>{{rebel.name}}</h2>
            <span>Aniversário: {{rebel.birthDate}}</span>
            <span>ID: {{rebel.id}}</span>
            <h2>Planeta {{rebel.planet}}</h2>
          </div>
        </header>
        <footer class="rebel-footer">
          <img src="../assets/images/star.png">
          <div class="rebel-description">
            {{rebel.description}}
          </div>
        </footer>
      </div>
    </div>
    <div v-if="isEditing && !success">
      <h1>Olá, o que você quer alterar?</h1>
      <p>Esses são os dados que você cadastrou no seu primero ato de alistamento. Você pode alterar quaisquer informações a qualquer momento se julgar necessário.</p>
      <form @submit="updateRebel($event, idRebelEdit)">
        <div class="form-group">
          <label>Nome</label>
          <input type="text" v-model="rebelNameEdit">
        </div>
        <div class="form-group">
          <label>Planeta</label>
          <input type="text" v-model="planetNameEdit">
        </div>
        <div class="form-group">
          <label>Por que você quer se juntar à aliança rebelde?</label>
          <input type="text" v-model="reasonsEdit">
        </div>
        <div class="form-group">
          <label>Data de nascimento</label>
          <input type="date" v-model="birthdayDateEdit">
        </div>
        <input type="submit" value="Atualizar!">
      </form>
    </div>
    <div v-if="success" class="message">
      <h1>Alteração realizada com sucesso!</h1>
      <p>A sua requisição foi executada com êxito.</p>
      <router-link to="/">Concluir</router-link>
    </div>
  </div>
</template>

<script>

  export default {
    name: 'Rebels',
    data() {
      return {
        rebelsArray: [],
        isEditing: false,
        idRebelEdit: '',
        rebelNameEdit: '',
        planetNameEdit: '',
        birthdayDateEdit: '',
        reasonsEdit: '',
        success: false,
        searchByNameVisible: false,
        searchByPlanetVisible: false,
        searchByDateVisible: false,
        nameSearching: '',
        planetSearching: '',
        initialDateSearching: '',
        finalDateSearching: ''
      }
    },
    methods: {
      formatDate(date) {
        let splitDate = date.split('-', 3).reverse()
        let joinDate = splitDate.join('/')
        return joinDate
      },
      getAllRebels() {
        const axios = require('axios')
        axios.get('https://test-mais-a-educacao-v1.herokuapp.com/?token=viniciusDeOliveiraRodrigues').then((res) => {
         this.rebelsArray = res.data
         return res.data
        }).catch((error) => {
          console.log(error)
        })
      },
      removeRebel(id) {
        const axios = require('axios')
        axios.delete(`https://test-mais-a-educacao-v1.herokuapp.com/${id}?token=viniciusDeOliveiraRodrigues`).then((res) => {
         this.resetCards()
        }).catch((error) => {
          console.log(error)
        })
      },
      getUpdateRebelData(id) {
        console.log(id);
        this.isEditing = true
        const axios = require('axios')
        axios.get(`https://test-mais-a-educacao-v1.herokuapp.com/${id}?token=viniciusDeOliveiraRodrigues`).then((res) => {
         this.idRebelEdit = res.data.id
         this.rebelNameEdit = res.data.name
         this.planetNameEdit = res.data.planet
         this.birthdayDateEdit = res.data.birthDate
         this.reasonsEdit = res.data.description
        }).catch((error) => {
          console.log(error)
        })
      },
      updateRebel(e, id) {
        e.preventDefault()
        const axios = require('axios')
        const rebel = {
          name: this.rebelNameEdit,
          planet: this.planetNameEdit,
          birthDate: this.formatDate(this.birthdayDateEdit),
          description: this.reasonsEdit
        }
          axios.put(`https://test-mais-a-educacao-v1.herokuapp.com/${id}?token=viniciusDeOliveiraRodrigues`, rebel).then((res) => {
            this.success = true
          }).catch((error) => {
            console.log(error);
          })
        
      },
      selectSearchType(e) {
        let option = e.target.value
        switch(option) {
          case 'all':
            this.rebelsArray = this.getAllRebels()
            this.searchByNameVisible = false 
            this.searchByPlanetVisible = false 
            this.searchByDateVisible = false 
          break
          case 'searchByName': 
            this.rebelsArray = this.getAllRebels() 
            this.searchByNameVisible = true 
            this.searchByPlanetVisible = false 
            this.searchByDateVisible = false 
          break
          case 'searchByPlanet': 
            this.rebelsArray = this.getAllRebels()
            this.searchByNameVisible = false 
            this.searchByPlanetVisible = true 
            this.searchByDateVisible = false  
          break
          case 'searchByDateDifference': 
            this.rebelsArray = this.getAllRebels() 
            this.searchByNameVisible = false 
            this.searchByPlanetVisible = false 
            this.searchByDateVisible = true 
          break
        }
      },
      filterRebels(e) {
        e.preventDefault()
        // console.log('caiu');
        if(this.searchByNameVisible) {
          const result = this.rebelsArray.filter(rebel => (rebel.name).toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "") === this.nameSearching.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, ""))
          this.rebelsArray = result
        } else if(this.searchByPlanetVisible) {
          const result = this.rebelsArray.filter(rebel => (rebel.planet).toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "") === this.planetSearching.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, ""))
          this.rebelsArray = result
        } else {
          let initial = this.resetDateFormat(this.initialDateSearching)
          let final = this.resetDateFormat(this.finalDateSearching)
          const result = this.rebelsArray.filter(rebel => this.resetDateFormat(rebel.birthDate) > initial && this.resetDateFormat(rebel.birthDate) < final)
          this.rebelsArray = result 
        }
      },
      resetCards() {
        this.rebelsArray = this.getAllRebels()
      },
      resetDateFormat(date = '17/01/2002') {
        let splitDate = date.split('/').reverse()
        splitDate = splitDate.join('-')
        splitDate = new Date(splitDate).getTime()
        return splitDate
      }
    },
    mounted() {
      this.getAllRebels(),
      console.log(this.resetDateFormat())
    }
  }

</script>

<style scoped>

  span {
    display: block;
  }

  .rebel {
    padding: 2.5rem;
    background-color: var(--dark-sec);
    border-radius: 1rem;
    margin-top: 1.2rem;
    font-size: 1.2rem;
    width: 50rem;
  }

  .rebel header {
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-between;
  }

  .rebel header .handle-options, .rebel header .rebel-data {
    line-height: 1.8;
  }

  .handle-options img {
    margin: 0 .2rem;
    cursor: pointer;
  }

  .rebel-footer {
    display: flex;
    align-items: center;
    gap: 1.2rem;
  }

  .rebel-footer img {
    margin: 1.3rem 0;
  }

  #form-filter {
    margin-bottom: 2rem;
  }

  .form-filter-container {
    display: flex;
    flex-wrap: wrap;
    width: 50rem;
    gap: 1.2rem;
    flex-direction: column;
  }

  .form-group input {
    width: 100%;
  }

  .form-group input[type="date"]:before {
    content: attr(placeholder) !important;
    color: #aaa;
    margin-right: 0.5em;
  }
  .form-group input[type="date"]:focus:before,
  .form-group input[type="date"]:valid:before {
    content: "";
  }

  .group-submit {
    display: block;
  }

</style>