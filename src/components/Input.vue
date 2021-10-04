<template>
  <div class="form-group">
    <label>{{label}}</label>
    <input :type="type">
  </div>
</template>

<script>

  export default {
    name: 'Input',
    props: {
      type: String,
      label: String
    }
  }

</script>

<style scoped>

  .form-group {
    display: flex;
    flex-direction: column;
    gap: 1.2rem;
    margin-top: 1.2rem;
  }

  input {
    outline: none;
    border: 1px solid var(--yellow-sec);
    height: 4rem;
    width: 100%;
    border-radius: 1rem;
    padding: 1.5rem;
  }

  @media(max-width: 925px) {
    
    .form-group {
      max-width: 100%;
    }

  }

</style>