<template>
  <div class="pill">
    <span>{{ name }}</span>
    <span>{{ amount }}</span>
  </div>
</template>

<script>
export default {
    props: [ 'name', 'amount' ]
}
</script>

<style scoped>
    .pill {
        background-color: crimson;
        color: #fff;
    }
</style>