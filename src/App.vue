<template>
  <main>
    <Sidebar/>
    <router-view/>
  </main>
</template>

<script>

  import Sidebar from './components/Sidebar.vue'

  export default {
    name: 'App',
    components: {
      Sidebar
    }    
  }

</script>

<style>

  :root {
    --dark: rgb(30, 35, 40);
    --dark-sec: rgb(42, 46, 52);
    --dark-alt: rgb(56, 63, 70);
    --yellow: rgb(245, 179, 1);
    --yellow-sec: rgb(254, 208, 83);
    --white: rgb(243, 243, 243); 
    font-size: 62.5%;
  }

  *, *::after, *::before {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  a, input[type="submit"] {
    text-decoration: none;
    color: var(--yellow-sec);
    transition: .5s;
  }
  
  .form-group {
    display: flex;
    flex-direction: column;
    gap: 1.2rem;
    margin-top: 1.2rem;
  }

  input, select {
    outline: none;
    border: 1px solid var(--yellow-sec);
    height: 4rem;
    width: 100%;
    border-radius: 1rem;
  }

  input[type="submit"]:hover {
    text-decoration: none;
    color: var(--yellow);
  }

  input[type="submit"] {
    border: none;
    outline: none;
    background-color: transparent;
    cursor: pointer;
    font-size: 2.5rem;
    font-weight: 700;
    text-align: left;
    margin-top: 1.5rem;
    text-align: left;
  }

  input[type="text"], input[type="date"] {
    padding: 1.5rem;
  }

  input[type="date"]::-webkit-inner-spin-button,
  input[type="date"]::-webkit-calendar-picker-indicator {
    display: none;
    -webkit-appearance: none;
  }

  select {
    padding-left: 1.2rem;
  }

  body {
    font-family: 'Inter', sans-serif;
    font-size: 1.6rem;
    background-color: var(--dark);
    color: var(--white);
    min-height: 100vh;
  }

  main {
    display: grid;
    grid-template-columns: 2fr 3fr;
  }

  h1 {
    color: var(--yellow);
    font-size: 2rem;
  }

  p {
    margin: 2rem 0;
    font-size: 1.8rem;
    font-weight: 300;
    line-height: 1.5;
  }

  .container {
    margin: 5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }

  .container div {
    max-width: 50rem;
  }

   @media(max-width: 925px) {
     
     .container div {
       max-width: 100%;
     }

     main {
       grid-template-columns: 1fr;
     }

  }

</style>
