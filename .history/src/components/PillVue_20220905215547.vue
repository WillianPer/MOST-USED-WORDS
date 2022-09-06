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
        margin: 10px;
        height: 55px;
        border-radius: 30px;

        background-color: crimson;
        color: #fff;
        font-size: 1.3rem;
        font-weight: bold;

        display: flex;
        align-items: center;
    }
</style>