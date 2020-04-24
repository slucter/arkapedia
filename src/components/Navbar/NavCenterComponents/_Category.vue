<template>
    <div class="nav-cat">
        <a @click="$emit('Catclick')">Kategori</a>
    </div>
</template>

<script>
export default {
  name: '_Category',

};
</script>

<style scoped>
.nav-cat{
    display: flex;
    flex: .5;
    background-color: rgb(255, 255, 255);
    height: 100%;
    align-items: center;
    justify-content: center;
}
.nav-cat a{
    text-decoration: none;
    font-weight: 500;
    color: #5a5a5a;
    cursor: pointer;
}
</style>
