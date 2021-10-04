<template>
  <div id="update">
  </div>
</template>

<script>
  
  export default {
    name: 'Update',
    mounted() {
      console.log(this.$route.param.id);
    }
  }

</script>