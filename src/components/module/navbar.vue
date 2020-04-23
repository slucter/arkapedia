<template>
    <div class="nav">
        <div class="navbar"></div>
    </div>
</template>

<script>
export default {
    name: "navbar"
}
</script>

<style scoped>
    *{
        margin: 0;
        padding: 0;
    }
    .navbar{
        position: fixed;
        height: 110px;
        width: 100%;
        box-shadow: 0 4px 6px -1px rgba(0,0,0,0.07);
        background: #ffffff;
        /* background: fuchsia; */
        margin-top: -20px;
    }
</style>