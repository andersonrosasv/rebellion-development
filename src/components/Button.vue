<template>
  <button>
    <div>
      <h2>{{title}}</h2>
      <p>{{description}}</p>
    </div>
  </button>  
</template>

<script>

  export default {
    name: 'Button',
    props: {
      title: String,
      description: String
    }
  }

</script>


<style scoped>

  button {
    outline: none;
    border: 1px solid var(--yellow);
    border-radius: 1rem;
    background-color: transparent;
    color: var(--yellow-sec);
    height: 12rem;
    width: 100%;
    padding: 3rem;
    cursor: pointer;
    transition: .5s;
  }

  button div {
    text-align: left;
  }

  button div h2 {
    color: var(--yellow);
    font-size: 2.2rem;
    margin-bottom: 1rem;
  }

  button div p {
    font-size: 1.3rem;
  }

  button:hover {
    background-color: var(--dark-sec);
  }

</style>